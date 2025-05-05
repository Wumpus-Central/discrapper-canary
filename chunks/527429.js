n.d(t, { Z: () => s }), n(388685);
var r = n(73800),
    i = n(981631);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function o(e) {
    switch (e) {
        case i.yXg.ARROW_DOWN:
            return 'ARROW_DOWN';
        case i.yXg.ARROW_UP:
            return 'ARROW_UP';
        case i.yXg.ARROW_LEFT:
            return 'ARROW_LEFT';
        case i.yXg.ARROW_RIGHT:
            return 'ARROW_RIGHT';
        default:
            return null;
    }
}
class s extends r.Component {
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown, !0);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown, !0);
    }
    focusNext(e) {
        let { getItemGrid: t, onFocus: n } = this.props,
            { focusedColumn: r, focusedRow: i } = this.state;
        if (null == e) return;
        let a = t();
        if (null == a) return;
        let o = this.getNext(a, r, i, e);
        this.setState(
            {
                focusedColumn: o.column,
                focusedRow: o.row
            },
            () => {
                let e = this.calculateFocusedItem();
                null != e && null != n && n(e);
            }
        );
    }
    getNext(e, t, n, r) {
        let i, a, o, s;
        if (null == t || null == n)
            (a = 0),
                (o = 0),
                (i = {
                    column: 0,
                    row: 0
                });
        else
            switch (((a = t), (o = n), r)) {
                case 'ARROW_UP':
                    i = {
                        column: a,
                        row: Math.max(o - 1, 0)
                    };
                    break;
                case 'ARROW_DOWN':
                    i = {
                        column: a,
                        row: Math.min(o + 1, e[a].length - 1)
                    };
                    break;
                case 'ARROW_LEFT':
                    i = this.wrapPosition(e, a, o, -1);
                    break;
                case 'ARROW_RIGHT':
                    i = this.wrapPosition(e, a, o, 1);
            }
        return (
            null != i && (s = e[i.column][i.row]),
            (null == s || null == i) &&
                (s =
                    e[
                        (i = {
                            column: a,
                            row: o
                        }).column
                    ][i.row]),
            {
                column: i.column,
                row: i.row,
                id: s
            }
        );
    }
    calculateClosest(e, t) {
        let n,
            r = this.props.getCoordsMap()[e];
        if (null == r) return;
        let i = Number.MAX_SAFE_INTEGER;
        for (let e = 0; e < t.length; e++) {
            let a = this.props.getCoordsMap()[t[e]];
            if (null == a) continue;
            let o = Math.abs(a.top - r.top);
            if (o < i) (i = o), (n = e);
            else break;
        }
        return n;
    }
    calculateFocusedItem() {
        let { getItemGrid: e } = this.props,
            { focusedRow: t, focusedColumn: n } = this.state,
            r = e();
        return null == r || null == n || null == t || null == r[n] || null == r[n][t] ? null : r[n][t];
    }
    render() {
        return this.props.children;
    }
    constructor(...e) {
        super(...e),
            a(this, 'state', {
                focusedColumn: null,
                focusedRow: null
            }),
            a(this, 'handleKeyDown', (e) => {
                let { onSelect: t } = this.props;
                switch (e.keyCode) {
                    case i.yXg.ARROW_DOWN:
                    case i.yXg.ARROW_UP:
                    case i.yXg.ARROW_LEFT:
                    case i.yXg.ARROW_RIGHT:
                        this.focusNext(o(e.keyCode));
                        break;
                    case i.yXg.ENTER:
                        let n = this.calculateFocusedItem();
                        null != n && null != t && (e.preventDefault(), e.stopPropagation(), t(n));
                }
            }),
            a(this, 'wrapPosition', (e, t, n, r) => {
                var i;
                let a = e.length,
                    o = Math.max(n * a + t + r, 0) % a,
                    s = null != (i = this.calculateClosest(e[t][n], e[o])) ? i : n,
                    l = 0;
                return (
                    r < 0 && o > t && (l = -1),
                    r > 0 && o < t && (l = 1),
                    {
                        column: o,
                        row: s + l
                    }
                );
            });
    }
}

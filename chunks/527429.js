n.d(t, { Z: () => o }), n(47120);
var i = n(192379),
    r = n(981631);
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
function s(e) {
    switch (e) {
        case r.yXg.ARROW_DOWN:
            return 'ARROW_DOWN';
        case r.yXg.ARROW_UP:
            return 'ARROW_UP';
        case r.yXg.ARROW_LEFT:
            return 'ARROW_LEFT';
        case r.yXg.ARROW_RIGHT:
            return 'ARROW_RIGHT';
        default:
            return null;
    }
}
class o extends i.Component {
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown, !0);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown, !0);
    }
    focusNext(e) {
        let { getItemGrid: t, onFocus: n } = this.props,
            { focusedColumn: i, focusedRow: r } = this.state;
        if (null == e) return;
        let a = t();
        if (null == a) return;
        let s = this.getNext(a, i, r, e);
        this.setState(
            {
                focusedColumn: s.column,
                focusedRow: s.row
            },
            () => {
                let e = this.calculateFocusedItem();
                null != e && null != n && n(e);
            }
        );
    }
    getNext(e, t, n, i) {
        let r, a, s, o;
        if (null == t || null == n)
            (a = 0),
                (s = 0),
                (r = {
                    column: 0,
                    row: 0
                });
        else
            switch (((a = t), (s = n), i)) {
                case 'ARROW_UP':
                    r = {
                        column: a,
                        row: Math.max(s - 1, 0)
                    };
                    break;
                case 'ARROW_DOWN':
                    r = {
                        column: a,
                        row: Math.min(s + 1, e[a].length - 1)
                    };
                    break;
                case 'ARROW_LEFT':
                    r = this.wrapPosition(e, a, s, -1);
                    break;
                case 'ARROW_RIGHT':
                    r = this.wrapPosition(e, a, s, 1);
            }
        return (
            null != r && (o = e[r.column][r.row]),
            (null == o || null == r) &&
                (o =
                    e[
                        (r = {
                            column: a,
                            row: s
                        }).column
                    ][r.row]),
            {
                column: r.column,
                row: r.row,
                id: o
            }
        );
    }
    calculateClosest(e, t) {
        let n;
        let i = this.props.getCoordsMap()[e];
        if (null == i) return;
        let r = Number.MAX_SAFE_INTEGER;
        for (let e = 0; e < t.length; e++) {
            let a = this.props.getCoordsMap()[t[e]];
            if (null == a) continue;
            let s = Math.abs(a.top - i.top);
            if (s < r) (r = s), (n = e);
            else break;
        }
        return n;
    }
    calculateFocusedItem() {
        let { getItemGrid: e } = this.props,
            { focusedRow: t, focusedColumn: n } = this.state,
            i = e();
        return null == i || null == n || null == t || null == i[n] || null == i[n][t] ? null : i[n][t];
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
                    case r.yXg.ARROW_DOWN:
                    case r.yXg.ARROW_UP:
                    case r.yXg.ARROW_LEFT:
                    case r.yXg.ARROW_RIGHT:
                        this.focusNext(s(e.keyCode));
                        break;
                    case r.yXg.ENTER:
                        let n = this.calculateFocusedItem();
                        null != n && null != t && (e.preventDefault(), e.stopPropagation(), t(n));
                }
            }),
            a(this, 'wrapPosition', (e, t, n, i) => {
                var r;
                let a = e.length,
                    s = Math.max(n * a + t + i, 0) % a,
                    o = null !== (r = this.calculateClosest(e[t][n], e[s])) && void 0 !== r ? r : n,
                    l = 0;
                return (
                    i < 0 && s > t && (l = -1),
                    i > 0 && s < t && (l = 1),
                    {
                        column: s,
                        row: o + l
                    }
                );
            });
    }
}

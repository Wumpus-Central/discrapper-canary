r.d(n, {
    Z: function () {
        return c;
    }
});
var i,
    a = r(47120);
var o = r(192379),
    s = r(981631);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function u(e) {
    switch (e) {
        case s.yXg.ARROW_DOWN:
            return 'ARROW_DOWN';
        case s.yXg.ARROW_UP:
            return 'ARROW_UP';
        case s.yXg.ARROW_LEFT:
            return 'ARROW_LEFT';
        case s.yXg.ARROW_RIGHT:
            return 'ARROW_RIGHT';
        default:
            return null;
    }
}
!(function (e) {
    (e.ARROW_UP = 'ARROW_UP'), (e.ARROW_DOWN = 'ARROW_DOWN'), (e.ARROW_LEFT = 'ARROW_LEFT'), (e.ARROW_RIGHT = 'ARROW_RIGHT');
})(i || (i = {}));
class c extends o.Component {
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown, !0);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown, !0);
    }
    focusNext(e) {
        let { getItemGrid: n, onFocus: r } = this.props,
            { focusedColumn: i, focusedRow: a } = this.state;
        if (null == e) return;
        let o = n();
        if (null == o) return;
        let s = this.getNext(o, i, a, e);
        this.setState(
            {
                focusedColumn: s.column,
                focusedRow: s.row
            },
            () => {
                let e = this.calculateFocusedItem();
                null != e && null != r && r(e);
            }
        );
    }
    getNext(e, n, r, i) {
        let a, o, s, l;
        if (null == n || null == r)
            (o = 0),
                (s = 0),
                (a = {
                    column: 0,
                    row: 0
                });
        else
            switch (((o = n), (s = r), i)) {
                case 'ARROW_UP':
                    a = {
                        column: o,
                        row: Math.max(s - 1, 0)
                    };
                    break;
                case 'ARROW_DOWN':
                    a = {
                        column: o,
                        row: Math.min(s + 1, e[o].length - 1)
                    };
                    break;
                case 'ARROW_LEFT':
                    a = this.wrapPosition(e, o, s, -1);
                    break;
                case 'ARROW_RIGHT':
                    a = this.wrapPosition(e, o, s, 1);
            }
        return (
            null != a && (l = e[a.column][a.row]),
            (null == l || null == a) &&
                (l =
                    e[
                        (a = {
                            column: o,
                            row: s
                        }).column
                    ][a.row]),
            {
                column: a.column,
                row: a.row,
                id: l
            }
        );
    }
    calculateClosest(e, n) {
        let r;
        let i = this.props.getCoordsMap()[e];
        if (null == i) return;
        let a = Number.MAX_SAFE_INTEGER;
        for (let e = 0; e < n.length; e++) {
            let o = this.props.getCoordsMap()[n[e]];
            if (null == o) continue;
            let s = Math.abs(o.top - i.top);
            if (s < a) (a = s), (r = e);
            else break;
        }
        return r;
    }
    calculateFocusedItem() {
        let { getItemGrid: e } = this.props,
            { focusedRow: n, focusedColumn: r } = this.state,
            i = e();
        return null == i || null == r || null == n || null == i[r] || null == i[r][n] ? null : i[r][n];
    }
    render() {
        return this.props.children;
    }
    constructor(...e) {
        super(...e),
            l(this, 'state', {
                focusedColumn: null,
                focusedRow: null
            }),
            l(this, 'handleKeyDown', (e) => {
                let { onSelect: n } = this.props;
                switch (e.keyCode) {
                    case s.yXg.ARROW_DOWN:
                    case s.yXg.ARROW_UP:
                    case s.yXg.ARROW_LEFT:
                    case s.yXg.ARROW_RIGHT:
                        this.focusNext(u(e.keyCode));
                        break;
                    case s.yXg.ENTER:
                        let r = this.calculateFocusedItem();
                        null != r && null != n && (e.preventDefault(), e.stopPropagation(), n(r));
                }
            }),
            l(this, 'wrapPosition', (e, n, r, i) => {
                var a;
                let o = e.length,
                    s = Math.max(r * o + n + i, 0) % o,
                    l = null !== (a = this.calculateClosest(e[n][r], e[s])) && void 0 !== a ? a : r,
                    u = 0;
                return (
                    i < 0 && s > n && (u = -1),
                    i > 0 && s < n && (u = 1),
                    {
                        column: s,
                        row: l + u
                    }
                );
            });
    }
}

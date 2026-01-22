n.d(t, { A: () => o }), n(896048);
var r = n(64700),
    i = n(650583);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    switch (e) {
        case i.dh.ARROW_DOWN:
            return "ARROW_DOWN";
        case i.dh.ARROW_UP:
            return "ARROW_UP";
        case i.dh.ARROW_LEFT:
            return "ARROW_LEFT";
        case i.dh.ARROW_RIGHT:
            return "ARROW_RIGHT";
        default:
            return null;
    }
}
class o extends r.Component {
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown, !0);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown, !0);
    }
    focusNext(e) {
        let { getItemGrid: t, onFocus: n } = this.props,
            { focusedColumn: r, focusedRow: i } = this.state;
        if (null == e) return;
        let a = t();
        if (null == a) return;
        let s = this.getNext(a, r, i, e);
        this.setState(
            {
                focusedColumn: s.column,
                focusedRow: s.row,
            },
            () => {
                let e = this.calculateFocusedItem();
                null != e && null != n && n(e);
            },
        );
    }
    getNext(e, t, n, r) {
        let i, a, s, o;
        if (null == t || null == n)
            (a = 0),
                (s = 0),
                (i = {
                    column: 0,
                    row: 0,
                });
        else
            switch (((a = t), (s = n), r)) {
                case "ARROW_UP":
                    i = {
                        column: a,
                        row: Math.max(s - 1, 0),
                    };
                    break;
                case "ARROW_DOWN":
                    i = {
                        column: a,
                        row: Math.min(s + 1, e[a].length - 1),
                    };
                    break;
                case "ARROW_LEFT":
                    i = this.wrapPosition(e, a, s, -1);
                    break;
                case "ARROW_RIGHT":
                    i = this.wrapPosition(e, a, s, 1);
            }
        return (
            null != i && (o = e[i.column][i.row]),
            (null == o || null == i) &&
                (o =
                    e[
                        (i = {
                            column: a,
                            row: s,
                        }).column
                    ][i.row]),
            {
                column: i.column,
                row: i.row,
                id: o,
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
            let s = Math.abs(a.top - r.top);
            if (s < i) (i = s), (n = e);
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
            a(this, "state", {
                focusedColumn: null,
                focusedRow: null,
            }),
            a(this, "handleKeyDown", (e) => {
                let { onSelect: t } = this.props;
                switch (e.key) {
                    case i.dh.ARROW_DOWN:
                    case i.dh.ARROW_UP:
                    case i.dh.ARROW_LEFT:
                    case i.dh.ARROW_RIGHT:
                        this.focusNext(s(e.key));
                        break;
                    case i.dh.ENTER:
                        let n = this.calculateFocusedItem();
                        null != n && null != t && (e.preventDefault(), e.stopPropagation(), t(n));
                }
            }),
            a(this, "wrapPosition", (e, t, n, r) => {
                var i;
                let a = e.length,
                    s = Math.max(n * a + t + r, 0) % a,
                    o = null != (i = this.calculateClosest(e[t][n], e[s])) ? i : n,
                    l = 0;
                return (
                    r < 0 && s > t && (l = -1),
                    r > 0 && s < t && (l = 1),
                    {
                        column: s,
                        row: o + l,
                    }
                );
            });
    }
}

"use strict";
n.d(t, { A: () => r });
var l = n(64700),
    i = n(650583);
class r extends l.Component {
    state = { focusedColumn: null, focusedRow: null };
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown, !0);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown, !0);
    }
    handleKeyDown = (e) => {
        let { onSelect: t } = this.props;
        switch (e.key) {
            case i.dh.ARROW_DOWN:
            case i.dh.ARROW_UP:
            case i.dh.ARROW_LEFT:
            case i.dh.ARROW_RIGHT:
                this.focusNext(
                    (function (e) {
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
                    })(e.key),
                );
                break;
            case i.dh.ENTER:
                let n = this.calculateFocusedItem();
                null != n && null != t && (e.preventDefault(), e.stopPropagation(), t(n));
        }
    };
    focusNext(e) {
        let { getItemGrid: t, onFocus: n } = this.props,
            { focusedColumn: l, focusedRow: i } = this.state;
        if (null == e) return;
        let r = t();
        if (null == r || 0 === r.length) return;
        let s = this.getNext(r, l, i, e);
        this.setState({ focusedColumn: s.column, focusedRow: s.row }, () => {
            let e = this.calculateFocusedItem();
            null != e && null != n && n(e);
        });
    }
    wrapPosition = (e, t, n, l) => {
        let i = e.length,
            r = Math.max(n * i + t + l, 0) % i,
            s = this.calculateClosest(e[t][n], e[r]) ?? n,
            a = 0;
        return l < 0 && r > t && (a = -1), l > 0 && r < t && (a = 1), { column: r, row: s + a };
    };
    getNext(e, t, n, l) {
        let i, r, s, a;
        if (null == t || null == n) (r = 0), (s = 0), (i = { column: 0, row: 0 });
        else
            switch (((r = t), (s = n), l)) {
                case "ARROW_UP":
                    i = { column: r, row: Math.max(s - 1, 0) };
                    break;
                case "ARROW_DOWN":
                    i = { column: r, row: Math.min(s + 1, e[r].length - 1) };
                    break;
                case "ARROW_LEFT":
                    i = this.wrapPosition(e, r, s, -1);
                    break;
                case "ARROW_RIGHT":
                    i = this.wrapPosition(e, r, s, 1);
            }
        return (
            null != i && (a = e[i.column]?.[i.row]),
            (null == a || null == i) && ((i = { column: r, row: s }), (a = e[i.column]?.[i.row])),
            { column: i.column, row: i.row, id: a }
        );
    }
    calculateClosest(e, t) {
        let n,
            l = this.props.getCoordsMap()[e];
        if (null == l) return;
        let i = Number.MAX_SAFE_INTEGER;
        for (let e = 0; e < t.length; e++) {
            let r = this.props.getCoordsMap()[t[e]];
            if (null == r) continue;
            let s = Math.abs(r.top - l.top);
            if (s < i) (i = s), (n = e);
            else break;
        }
        return n;
    }
    calculateFocusedItem() {
        let { getItemGrid: e } = this.props,
            { focusedRow: t, focusedColumn: n } = this.state,
            l = e();
        return null == l || null == n || null == t || null == l[n] || null == l[n][t] ? null : l[n][t];
    }
    render() {
        return this.props.children;
    }
}

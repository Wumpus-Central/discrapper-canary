"use strict";
n.d(t, { A: () => s });
var r = n(64700),
    i = n(650583);
class s extends r.Component {
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
            { focusedColumn: r, focusedRow: i } = this.state;
        if (null == e) return;
        let s = t();
        if (null == s) return;
        let a = this.getNext(s, r, i, e);
        this.setState({ focusedColumn: a.column, focusedRow: a.row }, () => {
            let e = this.calculateFocusedItem();
            null != e && null != n && n(e);
        });
    }
    wrapPosition = (e, t, n, r) => {
        let i = e.length,
            s = Math.max(n * i + t + r, 0) % i,
            a = this.calculateClosest(e[t][n], e[s]) ?? n,
            o = 0;
        return r < 0 && s > t && (o = -1), r > 0 && s < t && (o = 1), { column: s, row: a + o };
    };
    getNext(e, t, n, r) {
        let i, s, a, o;
        if (null == t || null == n) (s = 0), (a = 0), (i = { column: 0, row: 0 });
        else
            switch (((s = t), (a = n), r)) {
                case "ARROW_UP":
                    i = { column: s, row: Math.max(a - 1, 0) };
                    break;
                case "ARROW_DOWN":
                    i = { column: s, row: Math.min(a + 1, e[s].length - 1) };
                    break;
                case "ARROW_LEFT":
                    i = this.wrapPosition(e, s, a, -1);
                    break;
                case "ARROW_RIGHT":
                    i = this.wrapPosition(e, s, a, 1);
            }
        return (
            null != i && (o = e[i.column][i.row]),
            (null == o || null == i) && (o = e[(i = { column: s, row: a }).column][i.row]),
            { column: i.column, row: i.row, id: o }
        );
    }
    calculateClosest(e, t) {
        let n,
            r = this.props.getCoordsMap()[e];
        if (null == r) return;
        let i = Number.MAX_SAFE_INTEGER;
        for (let e = 0; e < t.length; e++) {
            let s = this.props.getCoordsMap()[t[e]];
            if (null == s) continue;
            let a = Math.abs(s.top - r.top);
            if (a < i) (i = a), (n = e);
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
}

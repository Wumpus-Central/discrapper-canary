a.d(t, { J: () => o, _: () => r }), a(321073);
var n,
    l = a(64700),
    i = a(735438),
    s = a.n(i),
    r = (((n = {}).PAGE = "PAGE"), (n.GAP = "GAP"), (n.BACK = "BACK"), (n.NEXT = "NEXT"), n);
class o extends l.PureComponent {
    static defaultProps = { maxVisiblePages: 9, hideMaxPage: !1 };
    changePageTo = (e) => {
        let { selectedPage: t, onPageChange: a } = this.props;
        t !== e && null != a && a(e);
    };
    handleForward = () => {
        this.changePageTo(Math.min(this.props.selectedPage + 1, this.props.totalPageCount));
    };
    handleBackward = () => {
        this.changePageTo(Math.max(this.props.selectedPage - 1, 1));
    };
    handleJump = (e) => {
        this.changePageTo(e);
    };
    getNeighborBounds() {
        let { totalPageCount: e, maxVisiblePages: t, selectedPage: a } = this.props,
            n = Math.ceil(t / 2),
            l = Math.floor(t / 2),
            [i, s] = a <= n ? [1, t] : a > e - l ? [e - t + 1, e] : [a - n + 1, a + l];
        return [Math.max(i, 1), Math.min(s, e)];
    }
    getPageList() {
        let { totalPageCount: e, selectedPage: t, hideMaxPage: a } = this.props,
            [n, l] = this.getNeighborBounds(),
            i = { type: "BACK", key: "back", disabled: 1 === t, selected: !1, navigateToPage: this.handleBackward },
            r = { type: "NEXT", key: "next", disabled: t === e, selected: !1, navigateToPage: this.handleForward },
            o = [],
            c = [];
        return (
            n > 1 &&
                ((o = [
                    { type: "PAGE", key: "page-1", targetPage: 1, navigateToPage: () => this.handleJump(1) },
                    { type: "GAP", key: "left-gap" },
                ]),
                (n += 2)),
            l < e &&
                ((c = [{ type: "GAP", key: "right-gap" }]),
                a ||
                    c.push({ type: "PAGE", key: `page-${e}`, targetPage: e, navigateToPage: () => this.handleJump(e) }),
                (l -= 2)),
            [
                i,
                ...o,
                ...s()
                    .range(n, l + 1)
                    .map((e) => ({
                        type: "PAGE",
                        key: `page-${e}`,
                        targetPage: e,
                        selected: e === t,
                        disabled: !1,
                        navigateToPage: () => this.handleJump(e),
                    })),
                ...c,
                r,
            ]
        );
    }
    render() {
        let { totalPageCount: e, children: t } = this.props;
        return t({ pages: this.getPageList(), hasMultiplePages: e > 1 });
    }
}

n.d(t, {
    J: () => c,
    _: () => l,
}),
    n(896048),
    n(321073);
var r,
    i = n(64700),
    a = n(735438),
    s = n.n(a);
function o(e, t, n) {
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
var l = (function (e) {
    return (e.PAGE = "PAGE"), (e.GAP = "GAP"), (e.BACK = "BACK"), (e.NEXT = "NEXT"), e;
})({});
class c extends (r = i.PureComponent) {
    getNeighborBounds() {
        let { totalPageCount: e, maxVisiblePages: t, selectedPage: n } = this.props,
            r = Math.ceil(t / 2),
            i = Math.floor(t / 2),
            a = [1, e],
            [s, o] = (a = n <= r ? [1, t] : n > e - i ? [e - t + 1, e] : [n - r + 1, n + i]);
        return [Math.max(s, 1), Math.min(o, e)];
    }
    getPageList() {
        let { totalPageCount: e, selectedPage: t, hideMaxPage: n } = this.props,
            [r, i] = this.getNeighborBounds(),
            a = {
                type: "BACK",
                key: "back",
                disabled: 1 === t,
                selected: !1,
                navigateToPage: this.handleBackward,
            },
            o = {
                type: "NEXT",
                key: "next",
                disabled: t === e,
                selected: !1,
                navigateToPage: this.handleForward,
            },
            l = [],
            c = [];
        return (
            r > 1 &&
                ((l = [
                    {
                        type: "PAGE",
                        key: "page-1",
                        targetPage: 1,
                        navigateToPage: () => this.handleJump(1),
                    },
                    {
                        type: "GAP",
                        key: "left-gap",
                    },
                ]),
                (r += 2)),
            i < e &&
                ((c = [
                    {
                        type: "GAP",
                        key: "right-gap",
                    },
                ]),
                n ||
                    c.push({
                        type: "PAGE",
                        key: "page-".concat(e),
                        targetPage: e,
                        navigateToPage: () => this.handleJump(e),
                    }),
                (i -= 2)),
            [
                a,
                ...l,
                ...s()
                    .range(r, i + 1)
                    .map((e) => ({
                        type: "PAGE",
                        key: "page-".concat(e),
                        targetPage: e,
                        selected: e === t,
                        disabled: !1,
                        navigateToPage: () => this.handleJump(e),
                    })),
                ...c,
                o,
            ]
        );
    }
    render() {
        let { totalPageCount: e, children: t } = this.props;
        return t({
            pages: this.getPageList(),
            hasMultiplePages: e > 1,
        });
    }
    constructor(...e) {
        super(...e),
            o(this, "changePageTo", (e) => {
                let { selectedPage: t, onPageChange: n } = this.props;
                t !== e && null != n && n(e);
            }),
            o(this, "handleForward", () => {
                this.changePageTo(Math.min(this.props.selectedPage + 1, this.props.totalPageCount));
            }),
            o(this, "handleBackward", () => {
                this.changePageTo(Math.max(this.props.selectedPage - 1, 1));
            }),
            o(this, "handleJump", (e) => {
                this.changePageTo(e);
            });
    }
}
o(c, "defaultProps", {
    maxVisiblePages: 9,
    hideMaxPage: !1,
});

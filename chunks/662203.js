t.d(a, { m: () => v });
var n,
    s = t(477900),
    l = t(582128),
    i = t(503698),
    r = t.n(i),
    o = t(534514),
    d = t(939249),
    h = t(921853),
    c = t(320448),
    g = t(862482),
    u = t(584454);
t(321073);
var p = t(435558),
    P = t.n(p),
    m = (((n = {}).PAGE = "PAGE"), (n.GAP = "GAP"), (n.BACK = "BACK"), (n.NEXT = "NEXT"), n);
class x extends l.PureComponent {
    static defaultProps = { maxVisiblePages: 9, hideMaxPage: !1 };
    changePageTo = (e) => {
        let { selectedPage: a, onPageChange: t } = this.props;
        a !== e && null != t && t(e);
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
        let { totalPageCount: e, maxVisiblePages: a, selectedPage: t } = this.props,
            n = Math.ceil(a / 2),
            s = Math.floor(a / 2),
            [l, i] = t <= n ? [1, a] : t > e - s ? [e - a + 1, e] : [t - n + 1, t + s];
        return [Math.max(l, 1), Math.min(i, e)];
    }
    getPageList() {
        let { totalPageCount: e, selectedPage: a, hideMaxPage: t } = this.props,
            [n, s] = this.getNeighborBounds(),
            l = { type: "BACK", key: "back", disabled: 1 === a, selected: !1, navigateToPage: this.handleBackward },
            i = { type: "NEXT", key: "next", disabled: a === e, selected: !1, navigateToPage: this.handleForward },
            r = [],
            o = [];
        (n > 1 &&
            ((r = [
                { type: "PAGE", key: "page-1", targetPage: 1, navigateToPage: () => this.handleJump(1) },
                { type: "GAP", key: "left-gap" },
            ]),
            (n += 2)),
            s < e &&
                ((o = [{ type: "GAP", key: "right-gap" }]),
                t ||
                    o.push({ type: "PAGE", key: `page-${e}`, targetPage: e, navigateToPage: () => this.handleJump(e) }),
                (s -= 2)));
        let d = P()
            .range(n, s + 1)
            .map((e) => ({
                type: "PAGE",
                key: `page-${e}`,
                targetPage: e,
                selected: e === a,
                disabled: !1,
                navigateToPage: () => this.handleJump(e),
            }));
        return [l, ...r, ...d, ...o, i];
    }
    render() {
        let { totalPageCount: e, children: a } = this.props;
        return a({ pages: this.getPageList(), hasMultiplePages: e > 1 });
    }
}
var k = t(792996),
    C = t(875634);
function N(e) {
    let { page: a, totalPageCount: t, disabled: n, onPageChange: i } = e,
        [h, c] = l.useState(!1),
        [g, p] = l.useState(void 0),
        P = null != g && g >= 1 && g <= t;
    return n
        ? (0, s.jsx)(
              o.D,
              { className: C.rQ, "aria-hidden": !0, variant: "heading-xs/semibold", children: "\u2026" },
              a.key,
          )
        : h
          ? (0, s.jsx)("div", {
                className: C.mF,
                children: (0, s.jsx)(
                    u.Q,
                    {
                        autoFocus: !0,
                        value: g,
                        min: 1,
                        max: t,
                        onChange: p,
                        onBlur: () => {
                            (c(!1), p(void 0));
                        },
                        onKeyUp: function (e) {
                            "Enter" === e.key && null != g && P && (i(g), c(!1), p(void 0));
                        },
                        disabled: n,
                        error: null,
                    },
                    a.key,
                ),
            })
          : (0, s.jsx)(
                d.D,
                {
                    onClick: () => c(!0),
                    children: (0, s.jsx)(o.D, {
                        className: r()(C.hJ, C.rQ),
                        "aria-hidden": !0,
                        variant: "heading-xs/semibold",
                        children: "\u2026",
                    }),
                },
                a.key,
            );
}
function v(e) {
    let {
            currentPage: a,
            totalCount: t,
            pageSize: n,
            maxVisiblePages: l,
            disablePaginationGap: i,
            onPageChange: o,
            hideMaxPage: u = !1,
            className: p,
            renderPageWrapper: P,
        } = e,
        v = Math.ceil(t / n);
    return (0, s.jsx)(x, {
        totalPageCount: v,
        selectedPage: a,
        maxVisiblePages: l,
        hideMaxPage: u,
        onPageChange: function (e) {
            null != o && o(e);
        },
        children: function (e) {
            let { pages: a, hasMultiplePages: t } = e;
            return t
                ? (0, s.jsx)("div", {
                      className: r()(C.Ug, p),
                      children: (0, s.jsx)("nav", {
                          className: C.DU,
                          children: a.map((e) => {
                              switch (e.type) {
                                  case m.BACK:
                                      return (function (e) {
                                          let { key: a, disabled: t, navigateToPage: n } = e;
                                          return (0, s.jsxs)(
                                              g.$n,
                                              {
                                                  className: C.Cp,
                                                  innerClassName: C.MO,
                                                  look: g.$n.Looks.BLANK,
                                                  color: g.$n.Colors.TRANSPARENT,
                                                  onClick: n,
                                                  disabled: t,
                                                  rel: "prev",
                                                  children: [
                                                      (0, s.jsx)(h.ChevronSmallLeftIcon, {
                                                          size: "md",
                                                          color: "currentColor",
                                                          className: C.B7,
                                                          "aria-hidden": !0,
                                                      }),
                                                      (0, s.jsx)("span", { children: k.intl.string(k.t.vgfxaA) }),
                                                  ],
                                              },
                                              a,
                                          );
                                      })(e);
                                  case m.PAGE:
                                      let a;
                                      return (
                                          (a = (0, s.jsx)(
                                              d.D,
                                              {
                                                  className: r()(C.hJ, { [C.Xs]: e.selected }),
                                                  onClick: e.selected ? void 0 : e.navigateToPage,
                                                  "aria-label": k.intl.formatToPlainString(k.t.IGMs8S, {
                                                      pageNumber: e.targetPage,
                                                  }),
                                                  "aria-current": e.selected ? "page" : void 0,
                                                  children: (0, s.jsx)("span", { children: e.targetPage }),
                                              },
                                              e.key,
                                          )),
                                          null != P ? P(e, a) : a
                                      );
                                  case m.GAP:
                                      return (0, s.jsx)(
                                          N,
                                          { page: e, totalPageCount: v, disabled: !!i, onPageChange: o },
                                          e.key,
                                      );
                                  case m.NEXT:
                                      return (function (e) {
                                          let { key: a, disabled: t, navigateToPage: n } = e;
                                          return (0, s.jsxs)(
                                              g.$n,
                                              {
                                                  className: C.Cp,
                                                  innerClassName: C.MO,
                                                  look: g.$n.Looks.BLANK,
                                                  color: g.$n.Colors.TRANSPARENT,
                                                  onClick: n,
                                                  disabled: t,
                                                  rel: "next",
                                                  children: [
                                                      (0, s.jsx)("span", { children: k.intl.string(k.t.XiOHRX) }),
                                                      (0, s.jsx)(c.ChevronSmallRightIcon, {
                                                          size: "md",
                                                          color: "currentColor",
                                                          className: C.B7,
                                                          "aria-hidden": !0,
                                                      }),
                                                  ],
                                              },
                                              a,
                                          );
                                      })(e);
                                  default:
                                      return null;
                              }
                          }),
                      }),
                  })
                : null;
        },
    });
}

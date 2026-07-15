d.d(t, { t: () => Z });
var i = d(287822),
    e = d(898369),
    c = d(748158),
    a = d(760300),
    s = (0, i.b)(null);
function n() {
    let l = (0, i.g)(s);
    if (!l) throw Error("Modal compound components must be used within Modal.Root");
    return l;
}
var Z = {
    Root: function ({
        open: l,
        children: t,
        onOpenChange: d,
        dismissible: c = !0,
        portalContainer: n,
        class: Z,
        hasBackdrop: b = !0,
        manageInitialFocus: m = !0,
        returnFocusRef: o,
    }) {
        let u = (0, a.a)(l, n ?? void 0),
            [h, W] = (0, i.p)(!1),
            G = (0, i.l)(null),
            p = (0, i.h)(() => {
                c && d?.(!1);
            }, [c, d]),
            N = (0, i.d)(() => ({ setHasDescription: W, dismissible: c, requestClose: p }), [c, p]),
            M = l && !!u;
        return ((0, a.n)(l), (0, a.r)(l, c, p), (0, a.i)(M, G, m, o), (0, a.o)(M, G), u && l)
            ? (0, i.r)(
                  (0, i.v)(s.Provider, {
                      value: N,
                      children: (0, i.v)("div", {
                          class: (0, e.n)("IncodeModalRoot", Z),
                          "data-incode-modal": "",
                          children: [
                              b &&
                                  (0, i.v)("div", {
                                      class: "IncodeModalBackdrop",
                                      "aria-hidden": "true",
                                      onMouseDown: () => {
                                          p();
                                      },
                                  }),
                              (0, i.v)("div", {
                                  ref: G,
                                  class: "IncodeModalDialog",
                                  role: "dialog",
                                  "aria-modal": "true",
                                  "aria-labelledby": a.t,
                                  "aria-describedby": h ? "incode-modal-description" : void 0,
                                  tabIndex: -1,
                                  onMouseDown: (l) => {
                                      l.stopPropagation();
                                  },
                                  children: t,
                              }),
                          ],
                      }),
                  }),
                  u,
              )
            : null;
    },
    Content: function ({ children: l, class: t }) {
        return (0, i.v)("div", { class: (0, e.n)("IncodeModalContent", t), children: l });
    },
    Close: function ({ "aria-label": l = "Close", title: t = "Close", class: d, onClick: a }) {
        let { dismissible: s, requestClose: Z } = n();
        if (!s) return null;
        let b = async () => {
            a && (await a()), Z();
        };
        return (0, i.v)("button", {
            type: "button",
            class: (0, e.n)("IncodeModalClose", d),
            "aria-label": l,
            title: t,
            onClick: b,
            children: (0, i.v)(c.o, { height: 32, width: 32, fillColor: "var(--icon-neutral-300)" }),
        });
    },
    Icon: function ({ children: l, class: t }) {
        return (0, i.v)("div", { class: (0, e.n)("IncodeModalIcon", t), children: l });
    },
    TitleSection: function ({ children: l, align: t = "center" }) {
        return (0, i.v)("div", {
            class: { center: "IncodeModalTitleSectionCenter", left: "IncodeModalTitleSectionLeft" }[t],
            children: l,
        });
    },
    Title: function ({ children: l, ref: t, class: d }) {
        return (0, i.v)("h2", {
            id: a.t,
            ref: t,
            tabIndex: -1,
            className: (0, e.n)("IncodeModalTitle", d),
            children: l,
        });
    },
    Subtitle: function ({ children: l, class: t }) {
        let { setHasDescription: d } = n();
        return (
            (0, i.f)(() => (d(!0), () => d(!1)), [d]),
            (0, i.v)("p", {
                id: "incode-modal-description",
                className: (0, e.n)("IncodeModalSubtitle", t),
                children: l,
            })
        );
    },
    Actions: function ({ children: l, class: t, orientation: d = "vertical" }) {
        return (0, i.v)("div", {
            class: (0, e.n)("vertical" === d ? "IncodeModalActionsVertical" : "IncodeModalActionsHorizontal", t),
            role: "group",
            children: l,
        });
    },
};

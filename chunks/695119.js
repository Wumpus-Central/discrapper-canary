i.d(t, { t: () => o });
var r = i(248702),
    n = i(578097),
    o = ({ isOpen: e = !1, onClose: t, labelledById: i, children: o }) => {
        let a = (0, r.l)(null),
            s = (0, r.l)(null),
            l = (0, r.h)(() => {
                t?.();
            }, [t]);
        return (
            (0, n.n)(e),
            (0, n.r)(e, !0, l),
            (0, n.i)(e, a),
            (0, n.o)(e, a),
            (0, n.s)(e, s),
            e
                ? (0, r.v)("div", {
                      ref: s,
                      class: "IncodeBottomSheetOverlay",
                      onClick: (e) => {
                          e.target === e.currentTarget && l();
                      },
                      children: (0, r.v)("div", {
                          class: "IncodeBottomSheetContainer",
                          onClick: l,
                          children: (0, r.v)("div", {
                              ref: a,
                              class: "IncodeBottomSheet",
                              role: "dialog",
                              "aria-modal": "true",
                              "aria-labelledby": i,
                              tabIndex: -1,
                              onClick: (e) => e.stopPropagation(),
                              children: o,
                          }),
                      }),
                  })
                : null
        );
    };

d.d(t, { t: () => c });
var i = d(287822),
    e = d(760300),
    c = ({ isOpen: l = !1, onClose: t, labelledById: d, children: c }) => {
        let a = (0, i.l)(null),
            s = (0, i.l)(null),
            n = (0, i.h)(() => {
                t?.();
            }, [t]);
        return ((0, e.n)(l), (0, e.r)(l, !0, n), (0, e.i)(l, a), (0, e.o)(l, a), (0, e.s)(l, s), l)
            ? (0, i.v)("div", {
                  ref: s,
                  class: "IncodeBottomSheetOverlay",
                  onClick: (l) => {
                      l.target === l.currentTarget && n();
                  },
                  children: (0, i.v)("div", {
                      class: "IncodeBottomSheetContainer",
                      onClick: n,
                      children: (0, i.v)("div", {
                          ref: a,
                          class: "IncodeBottomSheet",
                          role: "dialog",
                          "aria-modal": "true",
                          "aria-labelledby": d,
                          tabIndex: -1,
                          onClick: (l) => l.stopPropagation(),
                          children: c,
                      }),
                  }),
              })
            : null;
    };

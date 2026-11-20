var a = n(477900),
    s = n(582128),
    i = n(866665),
    r = n(821609),
    l = n(721157),
    c = n(555393),
    d = n(792996);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = (0, c.N)(),
                n =
                    (t?.reason ?? null) === l.ON.TRIAL_USER_NOT_ELIGIBLE
                        ? d.intl.string(d.t["2S/5mX"])
                        : d.intl.string(d.t.GcPSts),
                o = s.useRef(null);
            return t?.state === l.zE.BLOCK_CLAIM
                ? (0, a.jsx)(i.m, {
                      text: n,
                      asContainer: !0,
                      anchorRef: o,
                      children: (0, a.jsx)(r.$, {
                          buttonRef: o,
                          fullWidth: e.fullWidth,
                          variant: "overlay-primary",
                          size: e.size,
                          text: d.intl.string(d.t.rJbFM3),
                          disabled: !0,
                      }),
                  })
                : (0, a.jsx)(r.$, { ...e });
        },
    },
);

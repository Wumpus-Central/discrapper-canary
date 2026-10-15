n.d(t, { A: () => o });
var a = n(477900),
    s = n(582128),
    i = n(866665),
    r = n(821609),
    l = n(721157),
    d = n(555393),
    c = n(660183);
function o(e) {
    let t = (0, d.N)(),
        n =
            (t?.reason ?? null) === l.ON.TRIAL_USER_NOT_ELIGIBLE
                ? c.intl.string(c.t["2S/5mX"])
                : c.intl.string(c.t.GcPSts),
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
                  text: c.intl.string(c.t.rJbFM3),
                  disabled: !0,
              }),
          })
        : (0, a.jsx)(r.$, { ...e });
}

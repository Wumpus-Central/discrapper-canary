n.d(t, { A: () => d });
var a = n(477900),
    s = n(582128),
    i = n(866665),
    r = n(821609),
    l = n(721157),
    o = n(555393),
    c = n(660183);
function d(e) {
    let t = (0, o.N)(),
        n =
            (t?.reason ?? null) === l.ON.TRIAL_USER_NOT_ELIGIBLE
                ? c.intl.string(c.t["2S/5mX"])
                : c.intl.string(c.t.GcPSts),
        d = s.useRef(null);
    return t?.state === l.zE.BLOCK_CLAIM
        ? (0, a.jsx)(i.m, {
              text: n,
              asContainer: !0,
              anchorRef: d,
              children: (0, a.jsx)(r.$, {
                  buttonRef: d,
                  fullWidth: e.fullWidth,
                  variant: "overlay-primary",
                  size: e.size,
                  text: c.intl.string(c.t.rJbFM3),
                  disabled: !0,
              }),
          })
        : (0, a.jsx)(r.$, { ...e });
}

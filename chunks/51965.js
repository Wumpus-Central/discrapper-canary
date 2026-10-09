a.d(t, { A: () => o });
var n = a(477900),
    s = a(582128),
    i = a(866665),
    r = a(821609),
    l = a(721157),
    c = a(555393),
    d = a(660183);
function o(e) {
    let t = (0, c.N)(),
        a =
            (t?.reason ?? null) === l.ON.TRIAL_USER_NOT_ELIGIBLE
                ? d.intl.string(d.t["2S/5mX"])
                : d.intl.string(d.t.GcPSts),
        o = s.useRef(null);
    return t?.state === l.zE.BLOCK_CLAIM
        ? (0, n.jsx)(i.m, {
              text: a,
              asContainer: !0,
              anchorRef: o,
              children: (0, n.jsx)(r.$, {
                  buttonRef: o,
                  fullWidth: e.fullWidth,
                  variant: "overlay-primary",
                  size: e.size,
                  text: d.intl.string(d.t.rJbFM3),
                  disabled: !0,
              }),
          })
        : (0, n.jsx)(r.$, { ...e });
}

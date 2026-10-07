n.d(t, { A: () => o });
var a = n(477900);
n(582128);
var s = n(866665),
    i = n(821609),
    r = n(721157),
    l = n(555393),
    c = n(660183);
function o(e) {
    let t = (0, l.N)(),
        n =
            (t?.reason ?? null) === r.ON.TRIAL_USER_NOT_ELIGIBLE
                ? c.intl.string(c.t["2S/5mX"])
                : c.intl.string(c.t.GcPSts);
    return t?.state === r.zE.BLOCK_CLAIM
        ? (0, a.jsx)(s.m, {
              text: n,
              asContainer: !0,
              children: (0, a.jsx)(i.$, {
                  fullWidth: e.fullWidth,
                  variant: "overlay-primary",
                  size: e.size,
                  text: c.intl.string(c.t.rJbFM3),
                  disabled: !0,
              }),
          })
        : (0, a.jsx)(i.$, { ...e });
}

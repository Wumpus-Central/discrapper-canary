a.d(t, {
    Zq: () => p,
    _8: () => u,
    s$: () => s
}),
    a(47120);
var c = a(15729),
    r = a(286379),
    o = a(731965),
    i = a(797614);
let n = (0, c.U)((e) => ({ captchaServeVolume: {} }));
function u() {
    return 0 === Object.keys(n.getState().captchaServeVolume).length;
}
function s(e) {
    (0, o.j)(() => {
        n.setState((t) =>
            null == e
                ? t
                : e in t.captchaServeVolume
                  ? {
                        captchaServeVolume: {
                            ...t.captchaServeVolume,
                            [e]: t.captchaServeVolume[e] + 1
                        }
                    }
                  : {
                        captchaServeVolume: {
                            ...t.captchaServeVolume,
                            [e]: 1
                        }
                    }
        );
    });
}
function p() {
    for (let [e, t] of Object.entries(n.getState().captchaServeVolume))
        i.Z.distribution(
            {
                name: r.V.CAPTCHA_SERVE_VOLUME_DISTRIBUTION,
                tags: ['user_flow:'.concat(e)]
            },
            t,
            !0
        );
    (0, o.j)(() => n.setState({ captchaServeVolume: {} }));
}

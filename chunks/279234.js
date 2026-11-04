var i = n(611599),
    r = n(31436);
let a = null,
    s = new i.Vy("libdiscore");
function l(e) {
    s.error(e);
}
function o(e) {
    s.warn(e);
}
function d(e) {
    s.info(e);
}
function c(e) {
    s.verbose(e);
}
function u(e) {
    s.trace(e);
}
n.d(
    t,
    {},
    {
        P: function () {
            return (
                null == a &&
                    (a = (async () => {
                        await r.Bf();
                        let e = r.vZ();
                        (e.installLogCallback(l, o, d, c, u),
                            await e.initLibdiscore(),
                            (window._libdiscoreInitialized = !0));
                    })()),
                a
            );
        },
        x: function () {
            return !0 === window._libdiscoreInitialized;
        },
    },
);

var i = n(945810);
n(652215);
let r = (0, i.mj)({
    name: "2026-08-user-bio-max-length",
    kind: "user",
    defaultConfig: { maxLength: 190 },
    variations: { 0: { maxLength: 190 }, 1: { maxLength: 300 } },
});
n.d(
    t,
    {},
    {
        U: function (e) {
            let { location: t } = e;
            return r.useConfig({ location: t }).maxLength;
        },
        Z: function (e) {
            let { location: t } = e;
            return r.getConfig({ location: t }).maxLength;
        },
    },
);

n.d(t, { n: () => s });
var r = n(647438),
    i = n(427164);
let a = new Date(Date.UTC(2025, 8, 6)),
    o = (0, i.le)({
        name: "2025-09-quest-brand-color-removal-phase-2",
        kind: "user",
        defaultConfig: {
            enabled: !1,
            status: void 0,
        },
        variations: {
            0: {
                enabled: !1,
                status: void 0,
            },
            1: {
                enabled: !0,
                status: {
                    progressBlur: !0,
                    label1: !1,
                    label2: !1,
                    shineWipe: !0,
                },
            },
            2: {
                enabled: !0,
                status: {
                    progressBlur: !1,
                    label1: !0,
                    label2: !1,
                    shineWipe: !1,
                },
            },
            3: {
                enabled: !0,
                status: {
                    progressBlur: !1,
                    label1: !1,
                    label2: !0,
                    shineWipe: !1,
                },
            },
            4: {
                enabled: !0,
                status: {
                    progressBlur: !1,
                    label1: !1,
                    label2: !1,
                    shineWipe: !0,
                },
            },
        },
    });
function s(e) {
    let { questConfig: t, location: n } = e,
        i = r.useMemo(() => new Date(t.startsAt), [t.startsAt]) >= a,
        s = o.useConfig({ location: i ? n : "NONE" });
    return s.enabled && i
        ? s
        : {
              enabled: !1,
              status: void 0,
          };
}

n.d(t, {
    A: () => g,
}),
    n(896048);
var r = n(735438),
    i = n.n(r),
    a = n(314116),
    s = n(308528),
    o = n(843472),
    l = n(155718),
    c = n(47167),
    u = n(994500),
    d = n(287809),
    f = n(392054),
    p = n(73510),
    _ = n(652215),
    h = n(985018);

function m(e) {
    switch (e) {
        case _.Z86.GIF.title:
        case _.Z86.TENOR.title:
            return h.intl.string(h.t["0vrCgJ"]);
        default:
            return "";
    }
}
let g = [
    ...i()(_.Z86)
        .values()
        .map((e) => ({
            id: e.commandId,
            untranslatedName: e.command,
            displayName: e.command,
            type: l.kc.CHAT,
            inputType: f.y$.BUILT_IN_INTEGRATION,
            applicationId: p.Ik.BUILT_IN,
            get untranslatedDescription() {
                return m(e.title);
            },
            get displayDescription() {
                return m(e.title);
            },
            options:
                e.type === _.p_j.GIF
                    ? [
                          {
                              name: "query",
                              displayName: "query",
                              type: l.n4.STRING,
                              get description() {
                                  return h.intl.string(h.t["+9g3Du"]);
                              },
                              get displayDescription() {
                                  return h.intl.string(h.t["+9g3Du"]);
                              },
                              required: !0,
                          },
                      ]
                    : [],
            integrationType: e.type,
            integrationTitle: e.title,
        }))
        .value(),
    {
        id: "-15",
        untranslatedName: "leave",
        displayName: "leave",
        type: l.kc.CHAT,
        inputType: f.y$.BUILT_IN,
        applicationId: p.Ik.BUILT_IN,
        get untranslatedDescription() {
            return h.intl.string(h.t["26C4oi"]);
        },
        get displayDescription() {
            return h.intl.string(h.t["26C4oi"]);
        },
        options: [
            {
                name: "silent",
                displayName: "silent",
                type: l.n4.BOOLEAN,
                get description() {
                    return h.intl.string(h.t.YH7PkD);
                },
                get displayDescription() {
                    return h.intl.string(h.t.bq3JXs);
                },
                required: !1,
            },
        ],
        predicate: (e) => {
            let { channel: t } = e;
            return null != t && t.isGroupDM();
        },
        execute: (e, t) => {
            var n, r;
            let { channel: i } = t;
            if (null == i) return;
            let l = (0, c.m1)(i, d.default, u.A),
                f = h.intl.formatToPlainString(h.t.hJ5Ap4, {
                    name: l,
                }),
                p = h.intl.format(h.t.SSIVOu, {
                    name: l,
                }),
                _ = null != (n = null == (r = e.find((e) => "silent" === e.name)) ? void 0 : r.value) && n;
            async function m() {
                if (null != i)
                    try {
                        await s.A.closePrivateChannel(i.id, void 0, _);
                    } catch (e) {
                        o.A.sendBotMessage(i.id, h.intl.string(h.t["YOsuT/"]));
                    }
            }
            i.isManaged() &&
                ((f = h.intl.formatToPlainString(h.t.hVGjEW, {
                    name: l,
                })),
                (p = h.intl.format(h.t.IK1Qvs, {
                    name: l,
                }))),
                (0, a.A)({
                    title: f,
                    subtitle: p,
                    confirmText: h.intl.string(h.t["26C4oi"]),
                    onConfirm: m,
                });
        },
    },
    {
        id: "-17",
        untranslatedName: "sticker",
        displayName: "sticker",
        type: l.kc.CHAT,
        inputType: f.y$.BUILT_IN_INTEGRATION,
        applicationId: p.Ik.BUILT_IN,
        get untranslatedDescription() {
            return h.intl.string(h.t.GUH9II);
        },
        get displayDescription() {
            return h.intl.string(h.t.GUH9II);
        },
        options: [
            {
                name: "query",
                displayName: "query",
                type: l.n4.STRING,
                get description() {
                    return h.intl.string(h.t.hIbHm1);
                },
                get displayDescription() {
                    return h.intl.string(h.t.hIbHm1);
                },
                required: !0,
            },
        ],
        integrationType: _.p_j.STICKER,
        integrationTitle: "sticker",
    },
];

"use strict";
n.d(t, { A: () => g });
var r = n(735438),
    i = n.n(r),
    a = n(314116),
    s = n(308528),
    o = n(843472),
    l = n(155718),
    u = n(47167),
    c = n(994500),
    d = n(287809),
    _ = n(392054),
    f = n(73510),
    p = n(652215),
    h = n(985018);
function m(e) {
    switch (e) {
        case p.Z86.GIF.title:
        case p.Z86.TENOR.title:
            return h.intl.string(h.t["0vrCgJ"]);
        default:
            return "";
    }
}
let g = [
    ...i()(p.Z86)
        .values()
        .map((e) => ({
            id: e.commandId,
            untranslatedName: e.command,
            displayName: e.command,
            type: l.kc.CHAT,
            inputType: _.y$.BUILT_IN_INTEGRATION,
            applicationId: f.Ik.BUILT_IN,
            get untranslatedDescription() {
                return m(e.title);
            },
            get displayDescription() {
                return m(e.title);
            },
            options:
                e.type === p.p_j.GIF
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
        inputType: _.y$.BUILT_IN,
        applicationId: f.Ik.BUILT_IN,
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
            let { channel: n } = t;
            if (null == n) return;
            let r = (0, u.m1)(n, d.default, c.A),
                i = h.intl.formatToPlainString(h.t.hJ5Ap4, { name: r }),
                l = h.intl.format(h.t.SSIVOu, { name: r }),
                _ = e.find((e) => "silent" === e.name)?.value ?? !1;
            async function f() {
                if (null != n)
                    try {
                        await s.A.closePrivateChannel(n.id, void 0, _);
                    } catch (e) {
                        o.A.sendBotMessage(n.id, h.intl.string(h.t["YOsuT/"]));
                    }
            }
            n.isManaged() &&
                ((i = h.intl.formatToPlainString(h.t.hVGjEW, { name: r })),
                (l = h.intl.format(h.t.IK1Qvs, { name: r }))),
                (0, a.A)({ title: i, subtitle: l, confirmText: h.intl.string(h.t["26C4oi"]), onConfirm: f });
        },
    },
    {
        id: "-17",
        untranslatedName: "sticker",
        displayName: "sticker",
        type: l.kc.CHAT,
        inputType: _.y$.BUILT_IN_INTEGRATION,
        applicationId: f.Ik.BUILT_IN,
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
        integrationType: p.p_j.STICKER,
        integrationTitle: "sticker",
    },
];

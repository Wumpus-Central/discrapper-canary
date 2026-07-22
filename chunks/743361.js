"use strict";
n.d(t, { A: () => f });
var i = n(435558),
    r = n.n(i),
    a = n(314116),
    s = n(308528),
    l = n(493336),
    o = n(155718),
    d = n(47167),
    c = n(994500),
    u = n(287809),
    _ = n(392054),
    E = n(73510),
    A = n(652215),
    h = n(375708);
function I(e) {
    return e === A.Z86.GIF.title ? h.intl.string(h.t["0vrCgJ"]) : "";
}
let f = [
    ...r()(A.Z86)
        .values()
        .map((e) => ({
            id: e.commandId,
            untranslatedName: e.command,
            displayName: e.command,
            type: o.kc.CHAT,
            inputType: _.y$.BUILT_IN_INTEGRATION,
            applicationId: E.Ik.BUILT_IN,
            get untranslatedDescription() {
                return I(e.title);
            },
            get displayDescription() {
                return I(e.title);
            },
            options:
                e.type === A.p_j.GIF
                    ? [
                          {
                              name: "query",
                              displayName: "query",
                              type: o.n4.STRING,
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
        type: o.kc.CHAT,
        inputType: _.y$.BUILT_IN,
        applicationId: E.Ik.BUILT_IN,
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
                type: o.n4.BOOLEAN,
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
            let i = (0, d.m1)(n, u.default, c.A),
                r = h.intl.formatToPlainString(h.t.hJ5Ap4, { name: i }),
                o = h.intl.format(h.t.SSIVOu, { name: i }),
                _ = e.find((e) => "silent" === e.name)?.value ?? !1;
            async function E() {
                if (null != n)
                    try {
                        await s.A.closePrivateChannel(n.id, void 0, _);
                    } catch (e) {
                        l.A.sendBotMessage(n.id, h.intl.string(h.t["YOsuT/"]));
                    }
            }
            n.isManaged() &&
                ((r = h.intl.formatToPlainString(h.t.hVGjEW, { name: i })),
                (o = h.intl.format(h.t.IK1Qvs, { name: i }))),
                (0, a.A)({ title: r, subtitle: o, confirmText: h.intl.string(h.t["26C4oi"]), onConfirm: E });
        },
    },
    {
        id: "-17",
        untranslatedName: "sticker",
        displayName: "sticker",
        type: o.kc.CHAT,
        inputType: _.y$.BUILT_IN_INTEGRATION,
        applicationId: E.Ik.BUILT_IN,
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
                type: o.n4.STRING,
                get description() {
                    return h.intl.string(h.t.hIbHm1);
                },
                get displayDescription() {
                    return h.intl.string(h.t.hIbHm1);
                },
                required: !0,
            },
        ],
        integrationType: A.p_j.STICKER,
        integrationTitle: "sticker",
    },
];

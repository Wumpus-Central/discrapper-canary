"use strict";
n.d(t, { A: () => m });
var i = n(435558),
    r = n.n(i),
    a = n(314116),
    s = n(308528),
    l = n(148494),
    o = n(155718),
    d = n(47167),
    c = n(135621),
    u = n(566908),
    _ = n(970244),
    E = n(994500),
    A = n(287809),
    h = n(392054),
    I = n(73510),
    f = n(652215),
    p = n(375708);
function T(e) {
    return e === f.Z86.GIF.title ? p.intl.string(p.t["0vrCgJ"]) : "";
}
let m = [
    ...r()(f.Z86)
        .values()
        .map((e) => ({
            id: e.commandId,
            untranslatedName: e.command,
            displayName: e.command,
            type: o.kc.CHAT,
            inputType: h.y$.BUILT_IN_INTEGRATION,
            applicationId: I.Ik.BUILT_IN,
            get untranslatedDescription() {
                return T(e.title);
            },
            get displayDescription() {
                return T(e.title);
            },
            options:
                e.type === f.p_j.GIF
                    ? [
                          {
                              name: "query",
                              displayName: "query",
                              type: o.n4.STRING,
                              get description() {
                                  return p.intl.string(p.t["+9g3Du"]);
                              },
                              get displayDescription() {
                                  return p.intl.string(p.t["+9g3Du"]);
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
        inputType: h.y$.BUILT_IN,
        applicationId: I.Ik.BUILT_IN,
        get untranslatedDescription() {
            return p.intl.string(p.t["26C4oi"]);
        },
        get displayDescription() {
            return p.intl.string(p.t["26C4oi"]);
        },
        options: [
            {
                name: "silent",
                displayName: "silent",
                type: o.n4.BOOLEAN,
                get description() {
                    return p.intl.string(p.t.YH7PkD);
                },
                get displayDescription() {
                    return p.intl.string(p.t.bq3JXs);
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
            let i = (0, d.m1)(n, A.default, E.A),
                r = p.intl.formatToPlainString(p.t.hJ5Ap4, { name: i }),
                o = p.intl.format(p.t.SSIVOu, { name: i }),
                c = e.find((e) => "silent" === e.name)?.value ?? !1;
            async function u() {
                if (null != n)
                    try {
                        await s.A.closePrivateChannel(n.id, void 0, c);
                    } catch (e) {
                        l.A.sendBotMessage(n.id, p.intl.string(p.t["YOsuT/"]));
                    }
            }
            n.isManaged() &&
                ((r = p.intl.formatToPlainString(p.t.hVGjEW, { name: i })),
                (o = p.intl.format(p.t.IK1Qvs, { name: i }))),
                (0, a.A)({ title: r, subtitle: o, confirmText: p.intl.string(p.t["26C4oi"]), onConfirm: u });
        },
    },
    {
        id: "-19",
        untranslatedName: "schedule",
        displayName: "schedule",
        type: o.kc.CHAT,
        inputType: h.y$.BUILT_IN,
        applicationId: I.Ik.BUILT_IN,
        get untranslatedDescription() {
            return p.intl.string(p.t.Xw97sv);
        },
        get displayDescription() {
            return p.intl.string(p.t.Xw97sv);
        },
        options: [
            {
                name: "message",
                displayName: "message",
                type: o.n4.STRING,
                get description() {
                    return p.intl.string(p.t.WPXiIk);
                },
                get displayDescription() {
                    return p.intl.string(p.t.WPXiIk);
                },
                required: !0,
                get maxLength() {
                    return (0, c.a)();
                },
            },
        ],
        predicate: (e) => {
            let { channel: t } = e;
            return null != t && (0, u.f8)("ApplicationCommandBuiltInCommands");
        },
        execute: (e, t) => {
            let { channel: n } = t,
                i = e.find((e) => "message" === e.name)?.value;
            null != n && "string" == typeof i && "" !== i && (0, _.e0)({ channel: n, content: i });
        },
    },
    {
        id: "-17",
        untranslatedName: "sticker",
        displayName: "sticker",
        type: o.kc.CHAT,
        inputType: h.y$.BUILT_IN_INTEGRATION,
        applicationId: I.Ik.BUILT_IN,
        get untranslatedDescription() {
            return p.intl.string(p.t.GUH9II);
        },
        get displayDescription() {
            return p.intl.string(p.t.GUH9II);
        },
        options: [
            {
                name: "query",
                displayName: "query",
                type: o.n4.STRING,
                get description() {
                    return p.intl.string(p.t.hIbHm1);
                },
                get displayDescription() {
                    return p.intl.string(p.t.hIbHm1);
                },
                required: !0,
            },
        ],
        integrationType: f.p_j.STICKER,
        integrationTitle: "sticker",
    },
];

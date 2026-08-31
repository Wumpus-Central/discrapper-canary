"use strict";
n.d(t, { A: () => S });
var i = n(435558),
    r = n.n(i),
    a = n(314116),
    s = n(308528),
    l = n(148494),
    o = n(155718),
    d = n(47167),
    c = n(451909),
    u = n(135621),
    _ = n(551640),
    E = n(566908),
    A = n(970244),
    h = n(994500),
    I = n(287809),
    f = n(392054),
    p = n(73510),
    T = n(652215),
    m = n(375708);
function g(e) {
    return e === T.Z86.GIF.title ? m.intl.string(m.t["0vrCgJ"]) : "";
}
let S = [
    ...r()(T.Z86)
        .values()
        .map((e) => ({
            id: e.commandId,
            untranslatedName: e.command,
            displayName: e.command,
            type: o.kc.CHAT,
            inputType: f.y$.BUILT_IN_INTEGRATION,
            applicationId: p.Ik.BUILT_IN,
            get untranslatedDescription() {
                return g(e.title);
            },
            get displayDescription() {
                return g(e.title);
            },
            options:
                e.type === T.p_j.GIF
                    ? [
                          {
                              name: "query",
                              displayName: "query",
                              type: o.n4.STRING,
                              get description() {
                                  return m.intl.string(m.t["+9g3Du"]);
                              },
                              get displayDescription() {
                                  return m.intl.string(m.t["+9g3Du"]);
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
        inputType: f.y$.BUILT_IN,
        applicationId: p.Ik.BUILT_IN,
        get untranslatedDescription() {
            return m.intl.string(m.t["26C4oi"]);
        },
        get displayDescription() {
            return m.intl.string(m.t["26C4oi"]);
        },
        options: [
            {
                name: "silent",
                displayName: "silent",
                type: o.n4.BOOLEAN,
                get description() {
                    return m.intl.string(m.t.YH7PkD);
                },
                get displayDescription() {
                    return m.intl.string(m.t.bq3JXs);
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
            let i = (0, d.m1)(n, I.default, h.A),
                r = m.intl.formatToPlainString(m.t.hJ5Ap4, { name: i }),
                o = m.intl.format(m.t.SSIVOu, { name: i }),
                c = e.find((e) => "silent" === e.name)?.value ?? !1;
            async function u() {
                if (null != n)
                    try {
                        await s.A.closePrivateChannel(n.id, void 0, c);
                    } catch (e) {
                        l.A.sendBotMessage(n.id, m.intl.string(m.t["YOsuT/"]));
                    }
            }
            n.isManaged() &&
                ((r = m.intl.formatToPlainString(m.t.hVGjEW, { name: i })),
                (o = m.intl.format(m.t.IK1Qvs, { name: i }))),
                (0, a.A)({ title: r, subtitle: o, confirmText: m.intl.string(m.t["26C4oi"]), onConfirm: u });
        },
    },
    {
        id: "-19",
        untranslatedName: "schedule",
        displayName: "schedule",
        type: o.kc.CHAT,
        inputType: f.y$.BUILT_IN,
        applicationId: p.Ik.BUILT_IN,
        get untranslatedDescription() {
            return m.intl.string(m.t.Xw97sv);
        },
        get displayDescription() {
            return m.intl.string(m.t.Xw97sv);
        },
        options: [
            {
                name: "message",
                displayName: "message",
                type: o.n4.STRING,
                get description() {
                    return m.intl.string(m.t.WPXiIk);
                },
                get displayDescription() {
                    return m.intl.string(m.t.WPXiIk);
                },
                required: !0,
                get maxLength() {
                    return (0, u.a)();
                },
            },
        ],
        predicate: (e) => {
            let { channel: t } = e;
            return null != t && (0, E.f8)("ApplicationCommandBuiltInCommands");
        },
        execute: (e, t) => {
            let { channel: n } = t,
                i = e.find((e) => "message" === e.name)?.value;
            null != n &&
                "string" == typeof i &&
                "" !== i &&
                (0, A.e0)({ channel: n, message: c.Ay.parse(n, i), entryPoint: _.t.SLASH_COMMAND });
        },
    },
    {
        id: "-17",
        untranslatedName: "sticker",
        displayName: "sticker",
        type: o.kc.CHAT,
        inputType: f.y$.BUILT_IN_INTEGRATION,
        applicationId: p.Ik.BUILT_IN,
        get untranslatedDescription() {
            return m.intl.string(m.t.GUH9II);
        },
        get displayDescription() {
            return m.intl.string(m.t.GUH9II);
        },
        options: [
            {
                name: "query",
                displayName: "query",
                type: o.n4.STRING,
                get description() {
                    return m.intl.string(m.t.hIbHm1);
                },
                get displayDescription() {
                    return m.intl.string(m.t.hIbHm1);
                },
                required: !0,
            },
        ],
        integrationType: T.p_j.STICKER,
        integrationTitle: "sticker",
    },
];

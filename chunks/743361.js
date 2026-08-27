"use strict";
n.d(t, { A: () => g });
var i = n(435558),
    r = n.n(i),
    a = n(314116),
    s = n(308528),
    l = n(148494),
    o = n(155718),
    d = n(47167),
    c = n(451909),
    u = n(135621),
    _ = n(674470),
    E = n(970244),
    A = n(994500),
    h = n(287809),
    I = n(392054),
    f = n(73510),
    p = n(652215),
    T = n(375708);
function m(e) {
    return e === p.Z86.GIF.title ? T.intl.string(T.t["0vrCgJ"]) : "";
}
let g = [
    ...r()(p.Z86)
        .values()
        .map((e) => ({
            id: e.commandId,
            untranslatedName: e.command,
            displayName: e.command,
            type: o.kc.CHAT,
            inputType: I.y$.BUILT_IN_INTEGRATION,
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
                              type: o.n4.STRING,
                              get description() {
                                  return T.intl.string(T.t["+9g3Du"]);
                              },
                              get displayDescription() {
                                  return T.intl.string(T.t["+9g3Du"]);
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
        inputType: I.y$.BUILT_IN,
        applicationId: f.Ik.BUILT_IN,
        get untranslatedDescription() {
            return T.intl.string(T.t["26C4oi"]);
        },
        get displayDescription() {
            return T.intl.string(T.t["26C4oi"]);
        },
        options: [
            {
                name: "silent",
                displayName: "silent",
                type: o.n4.BOOLEAN,
                get description() {
                    return T.intl.string(T.t.YH7PkD);
                },
                get displayDescription() {
                    return T.intl.string(T.t.bq3JXs);
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
            let i = (0, d.m1)(n, h.default, A.A),
                r = T.intl.formatToPlainString(T.t.hJ5Ap4, { name: i }),
                o = T.intl.format(T.t.SSIVOu, { name: i }),
                c = e.find((e) => "silent" === e.name)?.value ?? !1;
            async function u() {
                if (null != n)
                    try {
                        await s.A.closePrivateChannel(n.id, void 0, c);
                    } catch (e) {
                        l.A.sendBotMessage(n.id, T.intl.string(T.t["YOsuT/"]));
                    }
            }
            n.isManaged() &&
                ((r = T.intl.formatToPlainString(T.t.hVGjEW, { name: i })),
                (o = T.intl.format(T.t.IK1Qvs, { name: i }))),
                (0, a.A)({ title: r, subtitle: o, confirmText: T.intl.string(T.t["26C4oi"]), onConfirm: u });
        },
    },
    {
        id: "-19",
        untranslatedName: "schedule",
        displayName: "schedule",
        type: o.kc.CHAT,
        inputType: I.y$.BUILT_IN,
        applicationId: f.Ik.BUILT_IN,
        get untranslatedDescription() {
            return T.intl.string(T.t.Xw97sv);
        },
        get displayDescription() {
            return T.intl.string(T.t.Xw97sv);
        },
        options: [
            {
                name: "message",
                displayName: "message",
                type: o.n4.STRING,
                get description() {
                    return T.intl.string(T.t.WPXiIk);
                },
                get displayDescription() {
                    return T.intl.string(T.t.WPXiIk);
                },
                required: !0,
                get maxLength() {
                    return (0, u.a)();
                },
            },
        ],
        predicate: (e) => {
            let { channel: t } = e;
            return null != t && (0, _.f8)("ApplicationCommandBuiltInCommands");
        },
        execute: (e, t) => {
            let { channel: n } = t,
                i = e.find((e) => "message" === e.name)?.value;
            null != n && "string" == typeof i && "" !== i && (0, E.e0)({ channel: n, message: c.Ay.parse(n, i) });
        },
    },
    {
        id: "-17",
        untranslatedName: "sticker",
        displayName: "sticker",
        type: o.kc.CHAT,
        inputType: I.y$.BUILT_IN_INTEGRATION,
        applicationId: f.Ik.BUILT_IN,
        get untranslatedDescription() {
            return T.intl.string(T.t.GUH9II);
        },
        get displayDescription() {
            return T.intl.string(T.t.GUH9II);
        },
        options: [
            {
                name: "query",
                displayName: "query",
                type: o.n4.STRING,
                get description() {
                    return T.intl.string(T.t.hIbHm1);
                },
                get displayDescription() {
                    return T.intl.string(T.t.hIbHm1);
                },
                required: !0,
            },
        ],
        integrationType: p.p_j.STICKER,
        integrationTitle: "sticker",
    },
];

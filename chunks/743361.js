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
    g = n(375708);
function m(e) {
    return e === T.Z86.GIF.title ? g.intl.string(g.t["0vrCgJ"]) : "";
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
                return m(e.title);
            },
            get displayDescription() {
                return m(e.title);
            },
            options:
                e.type === T.p_j.GIF
                    ? [
                          {
                              name: "query",
                              displayName: "query",
                              type: o.n4.STRING,
                              get description() {
                                  return g.intl.string(g.t["+9g3Du"]);
                              },
                              get displayDescription() {
                                  return g.intl.string(g.t["+9g3Du"]);
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
            return g.intl.string(g.t["26C4oi"]);
        },
        get displayDescription() {
            return g.intl.string(g.t["26C4oi"]);
        },
        options: [
            {
                name: "silent",
                displayName: "silent",
                type: o.n4.BOOLEAN,
                get description() {
                    return g.intl.string(g.t.YH7PkD);
                },
                get displayDescription() {
                    return g.intl.string(g.t.bq3JXs);
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
                r = g.intl.formatToPlainString(g.t.hJ5Ap4, { name: i }),
                o = g.intl.format(g.t.SSIVOu, { name: i }),
                c = e.find((e) => "silent" === e.name)?.value ?? !1;
            async function u() {
                if (null != n)
                    try {
                        await s.A.closePrivateChannel(n.id, void 0, c);
                    } catch (e) {
                        l.A.sendBotMessage(n.id, g.intl.string(g.t["YOsuT/"]));
                    }
            }
            (n.isManaged() &&
                ((r = g.intl.formatToPlainString(g.t.hVGjEW, { name: i })),
                (o = g.intl.format(g.t.IK1Qvs, { name: i }))),
                (0, a.A)({ title: r, subtitle: o, confirmText: g.intl.string(g.t["26C4oi"]), onConfirm: u }));
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
            return g.intl.string(g.t.Xw97sv);
        },
        get displayDescription() {
            return g.intl.string(g.t.Xw97sv);
        },
        options: [
            {
                name: "message",
                displayName: "message",
                type: o.n4.STRING,
                get description() {
                    return g.intl.string(g.t.WPXiIk);
                },
                get displayDescription() {
                    return g.intl.string(g.t.WPXiIk);
                },
                required: !0,
                get maxLength() {
                    return (0, u.a)();
                },
            },
        ],
        predicate: (e) => {
            let { channel: t } = e;
            return null != t && (0, E.kJ)(t, "ApplicationCommandBuiltInCommands");
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
            return g.intl.string(g.t.GUH9II);
        },
        get displayDescription() {
            return g.intl.string(g.t.GUH9II);
        },
        options: [
            {
                name: "query",
                displayName: "query",
                type: o.n4.STRING,
                get description() {
                    return g.intl.string(g.t.hIbHm1);
                },
                get displayDescription() {
                    return g.intl.string(g.t.hIbHm1);
                },
                required: !0,
            },
        ],
        integrationType: T.p_j.STICKER,
        integrationTitle: "sticker",
    },
];

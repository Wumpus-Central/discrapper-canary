n.d(t, { Z: () => g }), n(388685);
var r = n(392711),
    i = n.n(r),
    a = n(248514),
    o = n(493683),
    s = n(904245),
    l = n(911969),
    c = n(933557),
    u = n(699516),
    d = n(594174),
    f = n(895924),
    p = n(689079),
    _ = n(981631),
    m = n(388032);
function h(e) {
    switch (e) {
        case _.nkL.GIF.title:
        case _.nkL.TENOR.title:
            return m.intl.string(m.t["0vrCgJ"]);
        default:
            return "";
    }
}
let g = [
    ...i()(_.nkL)
        .values()
        .map((e) => ({
            id: e.commandId,
            untranslatedName: e.command,
            displayName: e.command,
            type: l.yU.CHAT,
            inputType: f.iw.BUILT_IN_INTEGRATION,
            applicationId: p.bi.BUILT_IN,
            get untranslatedDescription() {
                return h(e.title);
            },
            get displayDescription() {
                return h(e.title);
            },
            options:
                e.type === _.q9n.GIF
                    ? [
                          {
                              name: "query",
                              displayName: "query",
                              type: l.jw.STRING,
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
        type: l.yU.CHAT,
        inputType: f.iw.BUILT_IN,
        applicationId: p.bi.BUILT_IN,
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
                type: l.jw.BOOLEAN,
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
            var n, r;
            let { channel: i } = t;
            if (null == i) return;
            let l = (0, c.F6)(i, d.default, u.Z),
                f = m.intl.formatToPlainString(m.t.hJ5Ap4, { name: l }),
                p = m.intl.format(m.t.SSIVOu, { name: l }),
                _ = null != (r = null == (n = e.find((e) => "silent" === e.name)) ? void 0 : n.value) && r;
            async function h() {
                if (null != i)
                    try {
                        await o.Z.closePrivateChannel(i.id, void 0, _);
                    } catch (e) {
                        s.Z.sendBotMessage(i.id, m.intl.string(m.t["YOsuT/"]));
                    }
            }
            i.isManaged() &&
                ((f = m.intl.formatToPlainString(m.t.hVGjEW, { name: l })),
                (p = m.intl.format(m.t.IK1Qvs, { name: l }))),
                (0, a.Z)({
                    title: f,
                    subtitle: p,
                    confirmText: m.intl.string(m.t["26C4oi"]),
                    onConfirm: h,
                });
        },
    },
    {
        id: "-17",
        untranslatedName: "sticker",
        displayName: "sticker",
        type: l.yU.CHAT,
        inputType: f.iw.BUILT_IN_INTEGRATION,
        applicationId: p.bi.BUILT_IN,
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
                type: l.jw.STRING,
                get description() {
                    return m.intl.string(m.t.hIbHm1);
                },
                get displayDescription() {
                    return m.intl.string(m.t.hIbHm1);
                },
                required: !0,
            },
        ],
        integrationType: _.q9n.STICKER,
        integrationTitle: "sticker",
    },
];

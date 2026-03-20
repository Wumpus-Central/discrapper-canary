"use strict";
n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(873298),
    s = n(397927),
    a = n(955572),
    o = n(253932),
    l = n(985018);
function u() {
    let e = o.hH.useSetting(),
        t = o.Xi.useSetting();
    return [
        (0, r.jsxs)(
            s.rXV,
            {
                label: l.intl.string(l.t["C/5V0A"]),
                children: [
                    (0, r.jsx)(s.iDA, {
                        id: "compact-ui",
                        group: "list-density",
                        label: l.intl.string(l.t["7iegX4"]),
                        checked: t === i.NS.COMPACT,
                        action: () => {
                            o.Xi.updateSetting(i.NS.COMPACT);
                        },
                    }),
                    (0, r.jsx)(s.iDA, {
                        id: "default-ui",
                        group: "list-density",
                        label: l.intl.string(l.t.bBvAEH),
                        checked: t === i.NS.DEFAULT,
                        action: () => {
                            o.Xi.updateSetting(i.NS.DEFAULT);
                        },
                    }),
                    (0, r.jsx)(s.iDA, {
                        id: "cozy-ui",
                        group: "list-density",
                        label: l.intl.string(l.t["4cuYHx"]),
                        checked: t === i.NS.COZY,
                        action: () => {
                            o.Xi.updateSetting(i.NS.COZY);
                        },
                    }),
                ],
            },
            "list-density",
        ),
        (0, r.jsxs)(
            s.rXV,
            {
                label: l.intl.string(l.t.nKRoPv),
                children: [
                    (0, r.jsx)(s.iDA, {
                        id: "cozy-chat",
                        group: "chat-density",
                        label: l.intl.string(l.t.Jqj4cZ),
                        checked: !e,
                        action: () => {
                            o.hH.updateSetting(!1), (0, a.AC)();
                        },
                    }),
                    (0, r.jsx)(s.iDA, {
                        id: "compact-chat",
                        group: "chat-density",
                        label: l.intl.string(l.t["1JNcPS"]),
                        checked: e,
                        action: () => {
                            o.hH.updateSetting(!0), (0, a.AC)();
                        },
                    }),
                ],
            },
            "chat-density",
        ),
    ];
}

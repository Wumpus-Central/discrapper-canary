"use strict";
n.d(t, { f: () => u });
var r = n(627968),
    i = n(397927),
    a = n(954571),
    s = n(80569),
    o = n(421314),
    l = n(652215);
let u = async (e) => {
    let { analyticsLocation: t = null, ...u } = e;
    a.default.track(l.HAw.OPEN_MODAL, { type: "Emoji Studio", source: t }),
        await (0, i.mMO)(
            async () => {
                let { EmojiStudioModal: e } = await Promise.all([n.e("35929"), n.e("76443")]).then(n.bind(n, 849846));
                return (t) => (0, r.jsx)(e, { ...t, ...u });
            },
            {
                modalKey: s.y,
                onCloseRequest: () => {
                    (0, o.p)();
                },
            },
        );
};

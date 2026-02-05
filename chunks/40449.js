"use strict";
n.d(t, { NC: () => f, SW: () => _, VF: () => h, XM: () => p, f6: () => d, uv: () => m, zn: () => c });
var r = n(975571),
    i = n(935649),
    a = n(847599),
    s = n(81091),
    o = n(652215),
    l = n(536242),
    u = n(985018);
let c = new Set([a.q1.NSFW_GUILD]),
    d = (e) => {
        let t = (0, s.g)("age_verification_get_started_steps");
        return [
            { title: u.intl.string(u.t.HphYKp), description: t ? null : u.intl.string(u.t["GCZC+9"]) },
            { title: u.intl.string(u.t.nkO4L3), description: u.intl.string(u.t.rHZFsH) },
            {
                title: u.intl.string(u.t.aVwLfn),
                description: u.intl.format(u.t.n5vd1E, {
                    handleOnHelpUrlHook: () => {
                        i.A.openUrl(r.A.getArticleURL(o.MVz.TIGGER_PAWTECT_SYSTEM_DMS)),
                            (0, a.St)(e, a.WU.PRIMARY, a._7.SYSTEM_DMS_LEARN_MORE);
                    },
                }),
            },
        ];
    },
    _ = "AGE_VERIFICATION_MODAL_KEY",
    f = "AGE_VERIFICATION_GET_STARTED_MODAL_KEY";
var p = (function (e) {
        return (e.K_ID = "K_ID"), (e.PERSONA = "PERSONA"), e;
    })({}),
    h = (function (e) {
        return (
            (e[(e.FACIAL_AGE_ESTIMATION = 1)] = "FACIAL_AGE_ESTIMATION"),
            (e[(e.ID_VERIFICATION = 2)] = "ID_VERIFICATION"),
            (e[(e.MODULAR = 3)] = "MODULAR"),
            e
        );
    })({});
let m = {
    1: { title: l.default["2yLvkS"], description: l.default.eJmat5 },
    2: { title: l.default.dwkwo0, description: l.default.ZdmRwW },
};

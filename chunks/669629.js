"use strict";
n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(890698),
    l = n(201505),
    a = n(854378),
    o = n(359438),
    c = n(383302),
    d = n(362707),
    u = n(782021),
    h = n(991101);
n(436317);
var _ = n(985018),
    p = n(135622),
    m = n(885106);
function g(e) {
    let t,
        {
            invite: n,
            authBoxClassName: g,
            consentRequired: A,
            apiErrors: f,
            name: E,
            globalNameClientError: x,
            dateOfBirthClientError: I,
            parsedDateOfBirth: N,
            consent: v,
            registering: C,
            dateOfBirthRef: T,
            onConsentChange: j,
            onSubmit: S,
            onNameChange: y,
            onNameFocus: b,
            onNameBlur: R,
            onBirthdayChange: O,
            onGotoLogin: L,
        } = e,
        { username: w, global_name: k, date_of_birth: B } = f,
        D = n?.guild_scheduled_event != null;
    return (
        (t =
            n?.guild_scheduled_event != null
                ? (0, i.jsx)(o.X, { channel: n.channel, guildScheduledEvent: n.guild_scheduled_event })
                : (0, i.jsx)("div", {
                      className: m.S3,
                      children: (0, i.jsx)(r.A, { invite: n, inUnclaimedFlow: !0 }),
                  })),
        (0, i.jsxs)("div", {
            children: [
                (0, i.jsxs)(a.Ay, {
                    onSubmit: S,
                    tag: "form",
                    className: g,
                    children: [
                        t,
                        D ? (0, i.jsx)("div", { className: p.yF }) : null,
                        (0, i.jsxs)(a.eB, {
                            className: D ? void 0 : p.y0,
                            children: [
                                (0, i.jsx)(s.ksK, {
                                    helperText: _.intl.string(_.t["330TCc"]),
                                    label: _.intl.string(_.t["9AjdkD"]),
                                    error: x ?? (0, d.y)(k ?? w),
                                    autoFocus: !0,
                                    name: "global_name",
                                    value: E,
                                    placeholder: _.intl.string(_.t["09Q8yp"]),
                                    onChange: y,
                                    onFocus: b,
                                    onBlur: R,
                                }),
                                (0, i.jsx)(l.A, {
                                    label: _.intl.string(_.t.rhBeKe),
                                    wrapperClassName: p.DC,
                                    name: "date_of_birth",
                                    onChange: O,
                                    ref: T,
                                    error: I ?? (0, d.y)(B),
                                    value: N,
                                }),
                                (0, i.jsx)(u.A, { consent: v, consentRequired: A, onConsentChange: j }),
                                (0, i.jsx)(h.A, { consentRequired: A, consent: v, registering: C }),
                                (0, i.jsx)("div", {
                                    className: m.QX,
                                    children: (0, i.jsx)(s.QWc, {
                                        text: _.intl.string(_.t["1lWxux"]),
                                        textVariant: "text-sm/normal",
                                        onClick: L,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != n && D
                    ? (0, i.jsx)(a.Ay, {
                          className: m.QX,
                          children: (0, i.jsx)(c.N, { guild: n.guild, onlineCount: n.approximate_presence_count }),
                      })
                    : null,
            ],
        })
    );
}

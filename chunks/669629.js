"use strict";
n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(890698),
    l = n(201505),
    a = n(854378),
    o = n(359438),
    c = n(383302),
    d = n(782021),
    u = n(991101);
n(436317);
var h = n(985018),
    _ = n(135622),
    p = n(885106);
let g = /\.$/,
    m = (e) =>
        Array.isArray(e)
            ? e
                  .map((e) => e.replace(g, ""))
                  .join(". ")
                  .trim()
            : e;
function A(e) {
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
        { username: w, global_name: k, date_of_birth: D } = f,
        B = n?.guild_scheduled_event != null;
    return (
        (t =
            n?.guild_scheduled_event != null
                ? (0, i.jsx)(o.X, { channel: n.channel, guildScheduledEvent: n.guild_scheduled_event })
                : (0, i.jsx)("div", {
                      className: p.S3,
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
                        B ? (0, i.jsx)("div", { className: _.yF }) : null,
                        (0, i.jsxs)(a.eB, {
                            className: B ? void 0 : _.y0,
                            children: [
                                (0, i.jsx)(s.ksK, {
                                    helperText: h.intl.string(h.t["330TCc"]),
                                    label: h.intl.string(h.t["9AjdkD"]),
                                    error: x ?? m(k ?? w),
                                    autoFocus: !0,
                                    name: "global_name",
                                    value: E,
                                    placeholder: h.intl.string(h.t["09Q8yp"]),
                                    onChange: y,
                                    onFocus: b,
                                    onBlur: R,
                                }),
                                (0, i.jsx)(l.A, {
                                    label: h.intl.string(h.t.rhBeKe),
                                    wrapperClassName: _.DC,
                                    name: "date_of_birth",
                                    onChange: O,
                                    ref: T,
                                    error: I ?? m(D),
                                    value: N,
                                }),
                                (0, i.jsx)(d.A, { consent: v, consentRequired: A, onConsentChange: j }),
                                (0, i.jsx)(u.A, { consentRequired: A, consent: v, registering: C }),
                                (0, i.jsx)("div", {
                                    className: p.QX,
                                    children: (0, i.jsx)(s.QWc, {
                                        text: h.intl.string(h.t["1lWxux"]),
                                        textVariant: "text-sm/normal",
                                        onClick: L,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != n && B
                    ? (0, i.jsx)(a.Ay, {
                          className: p.QX,
                          children: (0, i.jsx)(c.N, { guild: n.guild, onlineCount: n.approximate_presence_count }),
                      })
                    : null,
            ],
        })
    );
}

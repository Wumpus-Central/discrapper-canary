"use strict";
n.d(t, { A: () => x });
var i = n(627968);
n(64700);
var s = n(311907),
    r = n(397927),
    l = n(890698),
    a = n(201505),
    o = n(153488),
    c = n(954571),
    d = n(854378),
    u = n(359438),
    h = n(383302),
    _ = n(362707),
    p = n(782021),
    g = n(991101),
    m = n(652215);
n(436317);
var A = n(985018),
    f = n(731286),
    E = n(818050);
function x(e) {
    let t,
        {
            invite: n,
            authBoxClassName: x,
            apiErrors: I,
            name: N,
            globalNameClientError: v,
            dateOfBirthClientError: C,
            parsedDateOfBirth: T,
            consent: j,
            registering: S,
            onConsentChange: y,
            onSubmit: b,
            onNameChange: R,
            onBirthdayChange: O,
            onGotoLogin: L,
        } = e,
        { username: w, global_name: D, date_of_birth: k } = I,
        U = (0, s.bG)([o.A], () => o.A.getAuthenticationConsentRequired()),
        P = n?.guild_scheduled_event != null;
    return (
        (t =
            n?.guild_scheduled_event != null
                ? (0, i.jsx)(u.X, { channel: n.channel, guildScheduledEvent: n.guild_scheduled_event })
                : (0, i.jsx)("div", {
                      className: E.S3,
                      children: (0, i.jsx)(l.A, { invite: n, inUnclaimedFlow: !0 }),
                  })),
        (0, i.jsxs)("div", {
            children: [
                (0, i.jsxs)(d.Ay, {
                    onSubmit: b,
                    tag: "form",
                    className: x,
                    children: [
                        t,
                        P ? (0, i.jsx)("div", { className: f.yF }) : null,
                        (0, i.jsxs)(d.eB, {
                            className: P ? void 0 : f.y0,
                            children: [
                                (0, i.jsx)(r.ksK, {
                                    helperText: A.intl.string(A.t["330TCc"]),
                                    label: A.intl.string(A.t["9AjdkD"]),
                                    error: v ?? (0, _.y)(D ?? w),
                                    autoFocus: !0,
                                    name: "global_name",
                                    value: N,
                                    placeholder: A.intl.string(A.t["09Q8yp"]),
                                    onChange: R,
                                    onFocus: () => {
                                        c.default.track(m.HAw.REGISTER_INPUT_FOCUS, { field: "global_name" });
                                    },
                                    onBlur: () => {
                                        c.default.track(m.HAw.REGISTER_INPUT_BLUR, { field: "global_name" });
                                    },
                                }),
                                (0, i.jsx)(a.A, {
                                    label: A.intl.string(A.t.rhBeKe),
                                    wrapperClassName: f.DC,
                                    name: "date_of_birth",
                                    onChange: O,
                                    error: C ?? (0, _.y)(k),
                                    value: T,
                                }),
                                (0, i.jsx)(p.A, { consent: j, consentRequired: U, onConsentChange: y }),
                                (0, i.jsx)(g.A, { consentRequired: U, consent: j, registering: S }),
                                (0, i.jsx)("div", {
                                    className: E.QX,
                                    children: (0, i.jsx)(r.QWc, {
                                        text: A.intl.string(A.t["1lWxux"]),
                                        textVariant: "text-sm/normal",
                                        onClick: L,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != n && P
                    ? (0, i.jsx)(d.Ay, {
                          className: E.QX,
                          children: (0, i.jsx)(h.N, { guild: n.guild, onlineCount: n.approximate_presence_count }),
                      })
                    : null,
            ],
        })
    );
}

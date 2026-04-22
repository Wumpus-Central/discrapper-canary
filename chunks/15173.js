n.d(t, { A: () => C });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(32880),
    o = n(663417),
    d = n(658675),
    u = n(834730),
    c = n(939249),
    g = n(311907),
    m = n(821609),
    _ = n(825484),
    A = n(691540),
    h = n(97483),
    p = n(98207),
    x = n(900686),
    E = n(700062),
    T = n(670492),
    S = n(957565),
    f = n(985018),
    b = n(526122);
function C() {
    let e = (0, g.bG)([T.A], () => T.A.getBackupCodes()),
        t = s.useMemo(
            () =>
                e
                    .map((e) => {
                        let { code: t, consumed: n } = e;
                        return `* ${v(t)}` + (n ? ` (${f.intl.string(f.t["ycME+9"])})` : "");
                    })
                    .join("\r\n"),
            [e],
        );
    return 0 === e.length
        ? (0, i.jsx)(m.$, { text: f.intl.string(f.t.Jc2myK), size: "sm", variant: "secondary", onClick: E.k7 })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)("ul", { className: b.E5, children: e.map((e) => (0, i.jsx)(I, { code: e }, e.code)) }),
                  (0, i.jsxs)(_.e, {
                      size: "sm",
                      children: [
                          (0, i.jsx)(x.A, {
                              fileContents: t,
                              contentType: "text/plain",
                              fileName: "discord_backup_codes.txt",
                              children: (0, i.jsx)(m.$, {
                                  text: f.intl.string(f.t["OO+Nib"]),
                                  variant: "secondary",
                                  icon: r.s,
                              }),
                          }),
                          (0, i.jsx)(m.$, {
                              text: f.intl.string(f.t["3x962E"]),
                              variant: "secondary",
                              icon: o.f,
                              onClick: N,
                          }),
                      ],
                  }),
              ],
          });
}
function v(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function N() {
    let e = T.A.getVerificationKey();
    try {
        await p.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, A.P0)({
            message: e.body?.message ?? f.intl.string(f.t.F8FvUy),
            type: h.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function I(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        l = v(t),
        r = s.useRef(null),
        o = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(d.P, { checked: n }), (0, i.jsx)(u.E, { variant: "text-md/normal", children: l })],
        });
    return S.p5
        ? (0, i.jsx)(c.D, {
              tag: "li",
              className: a()(b.aY, b.vk),
              innerRef: r,
              onKeyDown: (e) => {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, S.C)(l), r?.current?.focus());
              },
              onClick: () => {
                  (0, S.C)(l),
                      (0, A.P0)({ message: f.intl.string(f.t.mGZ66D), type: h.Ck.SUCCESS, id: "backup-code-copied" });
              },
              children: o,
          })
        : (0, i.jsx)("li", { className: b.aY, children: o });
}

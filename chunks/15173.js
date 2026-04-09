n.d(t, { A: () => h });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(158954),
    o = n(311907),
    d = n(397927),
    c = n(98207),
    u = n(900686),
    m = n(700062),
    g = n(670492),
    _ = n(957565),
    x = n(985018),
    A = n(762203);
function h() {
    let e = (0, o.bG)([g.A], () => g.A.getBackupCodes()),
        t = s.useMemo(
            () =>
                e
                    .map((e) => {
                        let { code: t, consumed: n } = e;
                        return `* ${p(t)}` + (n ? ` (${x.intl.string(x.t["ycME+9"])})` : "");
                    })
                    .join("\r\n"),
            [e],
        );
    return 0 === e.length
        ? (0, i.jsx)(d.Button, { text: x.intl.string(x.t.Jc2myK), size: "sm", variant: "secondary", onClick: m.k7 })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)("ul", { className: A.E5, children: e.map((e) => (0, i.jsx)(f, { code: e }, e.code)) }),
                  (0, i.jsxs)(d.ButtonGroup, {
                      size: "sm",
                      children: [
                          (0, i.jsx)(u.A, {
                              fileContents: t,
                              contentType: "text/plain",
                              fileName: "discord_backup_codes.txt",
                              children: (0, i.jsx)(d.Button, {
                                  text: x.intl.string(x.t["OO+Nib"]),
                                  variant: "secondary",
                                  icon: r.s3U,
                              }),
                          }),
                          (0, i.jsx)(d.Button, {
                              text: x.intl.string(x.t["3x962E"]),
                              variant: "secondary",
                              icon: r.fNY,
                              onClick: T,
                          }),
                      ],
                  }),
              ],
          });
}
function p(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function T() {
    let e = g.A.getVerificationKey();
    try {
        await c.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, d.showToast)({
            message: e.body?.message ?? x.intl.string(x.t.F8FvUy),
            type: d.ToastType.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function f(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        l = p(t),
        o = s.useRef(null),
        c = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(r.P7L, { checked: n }),
                (0, i.jsx)(r.EYj, { variant: "text-md/normal", children: l }),
            ],
        });
    return _.p5
        ? (0, i.jsx)(r.DUT, {
              tag: "li",
              className: a()(A.aY, A.vk),
              innerRef: o,
              onKeyDown: (e) => {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, _.C)(l), o?.current?.focus());
              },
              onClick: () => {
                  (0, _.C)(l),
                      (0, d.showToast)({
                          message: x.intl.string(x.t.mGZ66D),
                          type: d.ToastType.SUCCESS,
                          id: "backup-code-copied",
                      });
              },
              children: c,
          })
        : (0, i.jsx)("li", { className: A.aY, children: c });
}

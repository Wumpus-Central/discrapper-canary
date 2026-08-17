n.d(e, { A: () => T });
var i = n(477900);
n(582128);
var a = n(691540),
    r = n(857250),
    o = n(97483),
    c = n(477782),
    l = n(191023),
    s = n(803316),
    E = n(207133),
    p = n(174459),
    d = n(723702),
    g = n(38405),
    y = n(19575),
    A = n(179581),
    C = n(652215),
    u = n(375708);
function _(t, e) {
    (0, a.P0)((0, r.o)(t, o.Ck.FAILURE)), g.A.captureException(e);
}
function T(t, e, n) {
    if (
        (0, E.A)(e?.getChannelId()) ||
        n?.shouldHideMediaOptions === !0 ||
        !d.isPlatformEmbedded ||
        null == t ||
        !(0, s.e7)(t, n?.contentType, n?.originalContentType)
    )
        return null;
    let g = (0, s.XW)(t, n?.contentType, n?.originalContentType, s.N7);
    async function T() {
        try {
            let t = await y.Ay.saveImage(g, n?.contentType, s.N7);
            if (t === y._0.ERRORED) throw Error(`NativeUtils.saveImage errored for ${g}`);
            t === y._0.SAVED &&
                (p.default.track(C.HAw.CONTEXT_MENU_IMAGE_SAVED, { ...(0, A.N)() }),
                (0, a.P0)((0, r.o)(u.intl.string(u.t.cqpdJW), o.Ck.SUCCESS)));
        } catch (t) {
            p.default.track(C.HAw.CONTEXT_MENU_IMAGE_SAVE_FAILED, { ...(0, A.N)() }),
                _(u.intl.string(u.t["8Ve/S0"]), t);
        }
    }
    async function I() {
        try {
            await y.Ay.copyImage(g, n?.contentType),
                p.default.track(C.HAw.CONTEXT_MENU_IMAGE_COPIED, { ...(0, A.N)() }),
                (0, a.P0)((0, r.o)(u.intl.string(u.t.bhUpvC), o.Ck.SUCCESS));
        } catch (t) {
            _(u.intl.string(u.t.PTPbjx), t), p.default.track(C.HAw.CONTEXT_MENU_IMAGE_COPY_FAILED, { ...(0, A.N)() });
        }
    }
    return [
        (0, s.PK)(t, n?.contentType, n?.originalContentType)
            ? (0, i.jsx)(
                  c.Dr,
                  {
                      id: "copy-image",
                      label: u.intl.string(u.t.tvUqWn),
                      leadingAccessory: { type: "icon", icon: l.ImageIcon },
                      action: I,
                  },
                  "copy-image",
              )
            : null,
        (0, i.jsx)(
            c.Dr,
            {
                id: "save-image",
                label: u.intl.string(u.t.PeXhgO),
                leadingAccessory: { type: "icon", icon: l.ImageIcon },
                action: T,
            },
            "save-image",
        ),
    ];
}

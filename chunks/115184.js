n.d(e, { A: () => u });
var i = n(477900);
n(582128);
var a = n(376357),
    r = n(477782),
    o = n(191023),
    c = n(803316),
    l = n(207133),
    s = n(174459),
    E = n(723702),
    p = n(38405),
    d = n(19575),
    g = n(179581),
    y = n(652215),
    A = n(660183);
function C(t, e) {
    ((0, a.P0)((0, a.ox)(t, a.Ck.FAILURE)), p.A.captureException(e));
}
function u(t, e, n) {
    if (
        (0, l.A)(e?.getChannelId()) ||
        n?.shouldHideMediaOptions === !0 ||
        !E.isPlatformEmbedded ||
        null == t ||
        !(0, c.e7)(t, n?.contentType, n?.originalContentType)
    )
        return null;
    let p = (0, c.XW)(t, n?.contentType, n?.originalContentType, c.N7);
    async function u() {
        try {
            let t = await d.Ay.saveImage(p, n?.contentType, c.N7);
            if (t === d._0.ERRORED) throw Error(`NativeUtils.saveImage errored for ${p}`);
            t === d._0.SAVED &&
                (s.default.track(y.HAw.CONTEXT_MENU_IMAGE_SAVED, { ...(0, g.N)() }),
                (0, a.P0)((0, a.ox)(A.intl.string(A.t.cqpdJW), a.Ck.SUCCESS)));
        } catch (t) {
            (s.default.track(y.HAw.CONTEXT_MENU_IMAGE_SAVE_FAILED, { ...(0, g.N)() }),
                C(A.intl.string(A.t["8Ve/S0"]), t));
        }
    }
    async function _() {
        try {
            (await d.Ay.copyImage(p, n?.contentType),
                s.default.track(y.HAw.CONTEXT_MENU_IMAGE_COPIED, { ...(0, g.N)() }),
                (0, a.P0)((0, a.ox)(A.intl.string(A.t.bhUpvC), a.Ck.SUCCESS)));
        } catch (t) {
            (C(A.intl.string(A.t.PTPbjx), t), s.default.track(y.HAw.CONTEXT_MENU_IMAGE_COPY_FAILED, { ...(0, g.N)() }));
        }
    }
    return [
        (0, c.PK)(t, n?.contentType, n?.originalContentType)
            ? (0, i.jsx)(
                  r.Dr,
                  {
                      id: "copy-image",
                      label: A.intl.string(A.t.tvUqWn),
                      leadingAccessory: { type: "icon", icon: o.ImageIcon },
                      action: _,
                  },
                  "copy-image",
              )
            : null,
        (0, i.jsx)(
            r.Dr,
            {
                id: "save-image",
                label: A.intl.string(A.t.PeXhgO),
                leadingAccessory: { type: "icon", icon: o.ImageIcon },
                action: u,
            },
            "save-image",
        ),
    ];
}

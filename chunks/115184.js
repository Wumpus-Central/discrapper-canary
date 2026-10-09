n.d(e, { A: () => _ });
var i = n(477900);
n(582128);
var a = n(858899),
    c = n(477782),
    r = n(191023),
    o = n(803316),
    s = n(207133),
    l = n(174459),
    p = n(723702),
    E = n(38405),
    d = n(19575),
    g = n(179581),
    u = n(652215),
    y = n(660183);
function A(t, e) {
    ((0, a.P0)({ text: t, variant: "critical" }), E.A.captureException(e));
}
function _(t, e, n) {
    if (
        (0, s.A)(e?.getChannelId()) ||
        n?.shouldHideMediaOptions === !0 ||
        !p.isPlatformEmbedded ||
        null == t ||
        !(0, o.e7)(t, n?.contentType, n?.originalContentType)
    )
        return null;
    let E = (0, o.XW)(t, n?.contentType, n?.originalContentType, o.N7);
    async function _() {
        try {
            let t = await d.Ay.saveImage(E, n?.contentType, o.N7);
            if (t === d._0.ERRORED) throw Error(`NativeUtils.saveImage errored for ${E}`);
            t === d._0.SAVED &&
                (l.default.track(u.HAw.CONTEXT_MENU_IMAGE_SAVED, { ...(0, g.N)() }),
                (0, a.P0)({ text: y.intl.string(y.t.cqpdJW), variant: "success" }));
        } catch (t) {
            (l.default.track(u.HAw.CONTEXT_MENU_IMAGE_SAVE_FAILED, { ...(0, g.N)() }),
                A(y.intl.string(y.t["8Ve/S0"]), t));
        }
    }
    async function T() {
        try {
            (await d.Ay.copyImage(E, n?.contentType),
                l.default.track(u.HAw.CONTEXT_MENU_IMAGE_COPIED, { ...(0, g.N)() }),
                (0, a.P0)({ text: y.intl.string(y.t.bhUpvC), variant: "success" }));
        } catch (t) {
            (A(y.intl.string(y.t.PTPbjx), t), l.default.track(u.HAw.CONTEXT_MENU_IMAGE_COPY_FAILED, { ...(0, g.N)() }));
        }
    }
    return [
        (0, o.PK)(t, n?.contentType, n?.originalContentType)
            ? (0, i.jsx)(
                  c.Dr,
                  {
                      id: "copy-image",
                      label: y.intl.string(y.t.tvUqWn),
                      leadingAccessory: { type: "icon", icon: r.ImageIcon },
                      action: T,
                  },
                  "copy-image",
              )
            : null,
        (0, i.jsx)(
            c.Dr,
            {
                id: "save-image",
                label: y.intl.string(y.t.PeXhgO),
                leadingAccessory: { type: "icon", icon: r.ImageIcon },
                action: _,
            },
            "save-image",
        ),
    ];
}

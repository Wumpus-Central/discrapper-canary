n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(803316),
    r = n(207133),
    s = n(954571),
    o = n(723702),
    d = n(728458),
    c = n(837921),
    u = n(179581),
    g = n(652215),
    A = n(985018);
function p(e, t) {
    (0, l.showToast)((0, l.createToast)(e, l.ToastType.FAILURE)), d.A.captureException(t);
}
function m(e, t, n) {
    if (
        (0, r.A)(t?.getChannelId()) ||
        n?.shouldHideMediaOptions === !0 ||
        !o.isPlatformEmbedded ||
        null == e ||
        !(0, a.e7)(e, n?.contentType, n?.originalContentType)
    )
        return null;
    let d = (0, a.XW)(e, n?.contentType, n?.originalContentType, a.N7),
        m = async () => {
            try {
                let e = await c.Ay.saveImage(d, n?.contentType, a.N7);
                if (e === c._0.ERRORED) throw Error(`NativeUtils.saveImage errored for ${d}`);
                e === c._0.SAVED &&
                    (s.default.track(g.HAw.CONTEXT_MENU_IMAGE_SAVED, { ...(0, u.N)() }),
                    (0, l.showToast)((0, l.createToast)(A.intl.string(A.t.cqpdJW), l.ToastType.SUCCESS)));
            } catch (e) {
                s.default.track(g.HAw.CONTEXT_MENU_IMAGE_SAVE_FAILED, { ...(0, u.N)() }),
                    p(A.intl.string(A.t["8Ve/S0"]), e);
            }
        },
        f = async () => {
            try {
                await c.Ay.copyImage(d, n?.contentType),
                    s.default.track(g.HAw.CONTEXT_MENU_IMAGE_COPIED, { ...(0, u.N)() }),
                    (0, l.showToast)((0, l.createToast)(A.intl.string(A.t.bhUpvC), l.ToastType.SUCCESS));
            } catch (e) {
                p(A.intl.string(A.t.PTPbjx), e),
                    s.default.track(g.HAw.CONTEXT_MENU_IMAGE_COPY_FAILED, { ...(0, u.N)() });
            }
        };
    return [
        (0, a.PK)(e, n?.contentType, n?.originalContentType)
            ? (0, i.jsx)(
                  l.Drp,
                  {
                      id: "copy-image",
                      label: A.intl.string(A.t.tvUqWn),
                      leadingAccessory: { type: "icon", icon: l.xfq },
                      action: f,
                  },
                  "copy-image",
              )
            : null,
        (0, i.jsx)(
            l.Drp,
            {
                id: "save-image",
                label: A.intl.string(A.t.PeXhgO),
                leadingAccessory: { type: "icon", icon: l.xfq },
                action: m,
            },
            "save-image",
        ),
    ];
}

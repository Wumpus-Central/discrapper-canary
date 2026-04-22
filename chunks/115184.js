n.d(t, { A: () => y });
var i = n(627968);
n(64700);
var l = n(691540),
    a = n(857250),
    r = n(97483),
    s = n(477782),
    o = n(191023),
    d = n(803316),
    c = n(207133),
    u = n(954571),
    g = n(723702),
    A = n(728458),
    h = n(837921),
    m = n(179581),
    f = n(652215),
    p = n(985018);
function E(e, t) {
    (0, l.P0)((0, a.o)(e, r.Ck.FAILURE)), A.A.captureException(t);
}
function y(e, t, n) {
    if (
        (0, c.A)(t?.getChannelId()) ||
        n?.shouldHideMediaOptions === !0 ||
        !g.isPlatformEmbedded ||
        null == e ||
        !(0, d.e7)(e, n?.contentType, n?.originalContentType)
    )
        return null;
    let A = (0, d.XW)(e, n?.contentType, n?.originalContentType, d.N7),
        y = async () => {
            try {
                let e = await h.Ay.saveImage(A, n?.contentType, d.N7);
                if (e === h._0.ERRORED) throw Error(`NativeUtils.saveImage errored for ${A}`);
                e === h._0.SAVED &&
                    (u.default.track(f.HAw.CONTEXT_MENU_IMAGE_SAVED, { ...(0, m.N)() }),
                    (0, l.P0)((0, a.o)(p.intl.string(p.t.cqpdJW), r.Ck.SUCCESS)));
            } catch (e) {
                u.default.track(f.HAw.CONTEXT_MENU_IMAGE_SAVE_FAILED, { ...(0, m.N)() }),
                    E(p.intl.string(p.t["8Ve/S0"]), e);
            }
        },
        v = async () => {
            try {
                await h.Ay.copyImage(A, n?.contentType),
                    u.default.track(f.HAw.CONTEXT_MENU_IMAGE_COPIED, { ...(0, m.N)() }),
                    (0, l.P0)((0, a.o)(p.intl.string(p.t.bhUpvC), r.Ck.SUCCESS));
            } catch (e) {
                E(p.intl.string(p.t.PTPbjx), e),
                    u.default.track(f.HAw.CONTEXT_MENU_IMAGE_COPY_FAILED, { ...(0, m.N)() });
            }
        };
    return [
        (0, d.PK)(e, n?.contentType, n?.originalContentType)
            ? (0, i.jsx)(
                  s.Dr,
                  {
                      id: "copy-image",
                      label: p.intl.string(p.t.tvUqWn),
                      leadingAccessory: { type: "icon", icon: o.x },
                      action: v,
                  },
                  "copy-image",
              )
            : null,
        (0, i.jsx)(
            s.Dr,
            {
                id: "save-image",
                label: p.intl.string(p.t.PeXhgO),
                leadingAccessory: { type: "icon", icon: o.x },
                action: y,
            },
            "save-image",
        ),
    ];
}

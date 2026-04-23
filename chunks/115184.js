n.d(e, { A: () => E });
var a = n(627968);
n(64700);
var i = n(691540),
    r = n(857250),
    l = n(97483),
    s = n(477782),
    o = n(191023),
    c = n(803316),
    d = n(207133),
    u = n(954571),
    h = n(723702),
    p = n(38405),
    g = n(19575),
    m = n(179581),
    f = n(652215),
    A = n(985018);
function v(t, e) {
    (0, i.P0)((0, r.o)(t, l.Ck.FAILURE)), p.A.captureException(e);
}
function E(t, e, n) {
    if (
        (0, d.A)(e?.getChannelId()) ||
        n?.shouldHideMediaOptions === !0 ||
        !h.isPlatformEmbedded ||
        null == t ||
        !(0, c.e7)(t, n?.contentType, n?.originalContentType)
    )
        return null;
    let p = (0, c.XW)(t, n?.contentType, n?.originalContentType, c.N7),
        E = async () => {
            try {
                let t = await g.Ay.saveImage(p, n?.contentType, c.N7);
                if (t === g._0.ERRORED) throw Error(`NativeUtils.saveImage errored for ${p}`);
                t === g._0.SAVED &&
                    (u.default.track(f.HAw.CONTEXT_MENU_IMAGE_SAVED, { ...(0, m.N)() }),
                    (0, i.P0)((0, r.o)(A.intl.string(A.t.cqpdJW), l.Ck.SUCCESS)));
            } catch (t) {
                u.default.track(f.HAw.CONTEXT_MENU_IMAGE_SAVE_FAILED, { ...(0, m.N)() }),
                    v(A.intl.string(A.t["8Ve/S0"]), t);
            }
        },
        y = async () => {
            try {
                await g.Ay.copyImage(p, n?.contentType),
                    u.default.track(f.HAw.CONTEXT_MENU_IMAGE_COPIED, { ...(0, m.N)() }),
                    (0, i.P0)((0, r.o)(A.intl.string(A.t.bhUpvC), l.Ck.SUCCESS));
            } catch (t) {
                v(A.intl.string(A.t.PTPbjx), t),
                    u.default.track(f.HAw.CONTEXT_MENU_IMAGE_COPY_FAILED, { ...(0, m.N)() });
            }
        };
    return [
        (0, c.PK)(t, n?.contentType, n?.originalContentType)
            ? (0, a.jsx)(
                  s.Dr,
                  {
                      id: "copy-image",
                      label: A.intl.string(A.t.tvUqWn),
                      leadingAccessory: { type: "icon", icon: o.x },
                      action: y,
                  },
                  "copy-image",
              )
            : null,
        (0, a.jsx)(
            s.Dr,
            {
                id: "save-image",
                label: A.intl.string(A.t.PeXhgO),
                leadingAccessory: { type: "icon", icon: o.x },
                action: E,
            },
            "save-image",
        ),
    ];
}

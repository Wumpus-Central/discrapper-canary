n.d(t, { A: () => C, l: () => A });
var a = n(627968),
    s = n(64700),
    i = n(311907),
    l = n(554146),
    r = n(342494),
    o = n(379848),
    d = n(827827),
    c = n(253932),
    u = n(186111),
    m = n(461213),
    h = n(927813),
    x = n(159609),
    p = n(49999),
    g = n(818348),
    _ = n(985018),
    f = n(64924);
let v = h.A.Millis.HOUR,
    b = h.A.Millis.DAY,
    j = 4 * h.A.Millis.DAY;
function A() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { shouldShow: t = !0 } = e,
        [n, a] = s.useState(Date.now()),
        r = (0, i.bG)([u.A], () => u.A.hasLayers()),
        d = (0, i.bG)([m.A], () => m.A.getStatus()),
        h = c._6.useSetting(),
        _ = h?.value != null ? Number(h.value) : null,
        f = c.CY.useSetting(),
        A = d === g.cl.DND && null != _ && n - _ > b && "0" === f,
        { enabled: C } = (0, x.k)({
            location: "useDoNotDisturbReminderPopoverDismissibleContent",
            autoTrackExposure: A,
            disable: !A,
        });
    return (
        s.useEffect(() => {
            if (d === g.cl.DND) {
                a(Date.now());
                let e = setInterval(() => a(Date.now()), v);
                return () => clearInterval(e);
            }
        }, [d]),
        (0, o.Wl)(
            C && !r && t ? l.M.DO_NOT_DISTURB_REMINDER_POPOVER : null,
            { cooldownDurationMs: j, numTimesToRecur: 2 },
            p.m.ACCOUNT_NAME_ZONE,
            !0,
        )
    );
}
function C(e) {
    let { targetElementRef: t, onDismiss: n, children: s } = e,
        { enabled: i, titleText: l, bodyText: o } = (0, x.k)({ location: "popover", autoTrackExposure: !1 });
    return null != t.current && i
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  s,
                  (0, a.jsx)(r.AM, {
                      targetElementRef: t,
                      title: _.intl.string(l),
                      body: _.intl.string(o),
                      caretConfig: { align: "start" },
                      gradientColor: "purple",
                      actions: [
                          {
                              text: _.intl.string(_.t.fwPurU),
                              onClick: () => {
                                  (0, d.A)({ nextStatus: g.cl.ONLINE }), n?.(p.i.PRIMARY);
                              },
                          },
                      ],
                      graphic: { type: "image", src: f },
                      onRequestClose: () => n?.(p.i.DISMISS),
                  }),
              ],
          })
        : s;
}

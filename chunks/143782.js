e.d(n, { default: () => s });
var i = e(200651);
e(192379);
var l = e(153867),
    r = e(468026),
    a = e(933557),
    o = e(388032);
let s = (t) => {
    let { onConfirm: n, channel: e, ...s } = t,
        c = (0, a.ZP)(e);
    return null == c
        ? null
        : (0, i.jsx)(r.default, {
              confirmText: o.intl.string(o.t['cY+Ooa']),
              secondaryConfirmText: o.intl.string(o.t['JdIQ/f']),
              title: o.intl.string(o.t['0LZN5O']),
              cancelText: o.intl.string(o.t['ETE/oK']),
              onConfirm: n,
              onConfirmSecondary: () => {
                  l.ZP.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !0 }), n();
              },
              body: o.intl.format(o.t['vA+uEh'], { channel: c }),
              ...s
          });
};

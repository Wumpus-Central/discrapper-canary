n.d(t, {
    HS: () => d,
    Hg: () => c,
    PW: () => _,
    S5: () => r,
    ZA: () => a,
    l0: () => f
}),
    n(177593),
    n(653041);
var i = n(65154);
let r = null != navigator.mediaDevices && null != navigator.mediaDevices.enumerateDevices,
    a = r && 'setSinkId' in HTMLAudioElement.prototype;
function s(e) {
    return {
        id: i.w5,
        type: e,
        index: 0,
        name: 'Default'
    };
}
function o() {
    return [s(i.h7.AUDIO_INPUT), s(i.h7.AUDIO_OUTPUT), s(i.h7.VIDEO_INPUT)];
}
function l(e, t) {
    return e.filter((e) => e.type === t);
}
function u() {
    return r
        ? navigator.mediaDevices
              .enumerateDevices()
              .then((e) => {
                  let t = 0,
                      n = 0,
                      r = 0;
                  return e
                      .filter((e) => {
                          switch (e.kind) {
                              case i.h7.AUDIO_INPUT:
                              case i.h7.AUDIO_OUTPUT:
                              case i.h7.VIDEO_INPUT:
                                  return !0;
                              default:
                                  return !1;
                          }
                      })
                      .map((e) => {
                          let a;
                          switch (e.kind) {
                              case i.h7.AUDIO_INPUT:
                                  a = t++;
                                  break;
                              case i.h7.AUDIO_OUTPUT:
                                  a = n++;
                                  break;
                              case i.h7.VIDEO_INPUT:
                              default:
                                  a = r++;
                          }
                          return {
                              id: e.deviceId,
                              type: e.kind,
                              index: a,
                              name: null != e.label && '' !== e.label ? e.label : 0 === a ? 'Default' : 'Device '.concat(a)
                          };
                      });
              })
              .then((e) => (a || (e = e.filter((e) => e.type !== i.h7.AUDIO_OUTPUT)).push(s(i.h7.AUDIO_OUTPUT)), e))
              .catch(o)
        : new Promise((e) => {
              setImmediate(() => e(o()));
          });
}
async function c() {
    return l(await u(), i.h7.AUDIO_INPUT);
}
async function d() {
    return l(await u(), i.h7.AUDIO_OUTPUT);
}
async function f() {
    return l(await u(), i.h7.VIDEO_INPUT);
}
async function _() {
    let e = await u();
    return [l(e, i.h7.AUDIO_INPUT), l(e, i.h7.AUDIO_OUTPUT), l(e, i.h7.VIDEO_INPUT)];
}

n.d(t, {
    HS: () => d,
    Hg: () => u,
    PW: () => _,
    S5: () => i,
    ZA: () => o,
    l0: () => f
}),
    n(177593),
    n(653041);
var r = n(65154);
let i = null != navigator.mediaDevices && null != navigator.mediaDevices.enumerateDevices,
    o = i && 'setSinkId' in HTMLAudioElement.prototype;
function a(e) {
    return {
        id: r.w5,
        type: e,
        index: 0,
        name: 'Default'
    };
}
function s() {
    return [a(r.h7.AUDIO_INPUT), a(r.h7.AUDIO_OUTPUT), a(r.h7.VIDEO_INPUT)];
}
function l(e, t) {
    return e.filter((e) => e.type === t);
}
function c() {
    return i
        ? navigator.mediaDevices
              .enumerateDevices()
              .then((e) => {
                  let t = 0,
                      n = 0,
                      i = 0;
                  return e
                      .filter((e) => {
                          switch (e.kind) {
                              case r.h7.AUDIO_INPUT:
                              case r.h7.AUDIO_OUTPUT:
                              case r.h7.VIDEO_INPUT:
                                  return !0;
                              default:
                                  return !1;
                          }
                      })
                      .map((e) => {
                          let o;
                          switch (e.kind) {
                              case r.h7.AUDIO_INPUT:
                                  o = t++;
                                  break;
                              case r.h7.AUDIO_OUTPUT:
                                  o = n++;
                                  break;
                              case r.h7.VIDEO_INPUT:
                              default:
                                  o = i++;
                          }
                          return {
                              id: e.deviceId,
                              type: e.kind,
                              index: o,
                              name: null != e.label && '' !== e.label ? e.label : 0 === o ? 'Default' : 'Device '.concat(o)
                          };
                      });
              })
              .then((e) => (o || (e = e.filter((e) => e.type !== r.h7.AUDIO_OUTPUT)).push(a(r.h7.AUDIO_OUTPUT)), e))
              .catch(s)
        : new Promise((e) => {
              setImmediate(() => e(s()));
          });
}
async function u() {
    return l(await c(), r.h7.AUDIO_INPUT);
}
async function d() {
    return l(await c(), r.h7.AUDIO_OUTPUT);
}
async function f() {
    return l(await c(), r.h7.VIDEO_INPUT);
}
async function _() {
    let e = await c();
    return [l(e, r.h7.AUDIO_INPUT), l(e, r.h7.AUDIO_OUTPUT), l(e, r.h7.VIDEO_INPUT)];
}

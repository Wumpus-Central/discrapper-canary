n.d(t, {
    HS: () => d,
    Hg: () => u,
    PW: () => _,
    S5: () => i,
    ZA: () => a,
    l0: () => f
}),
    n(358797),
    n(539854);
var r = n(65154);
let i = null != navigator.mediaDevices && null != navigator.mediaDevices.enumerateDevices,
    a = i && 'setSinkId' in HTMLAudioElement.prototype;
function o(e) {
    return {
        id: r.w5,
        type: e,
        index: 0,
        name: 'Default'
    };
}
function s() {
    return [o(r.h7.AUDIO_INPUT), o(r.h7.AUDIO_OUTPUT), o(r.h7.VIDEO_INPUT)];
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
                          let a;
                          switch (e.kind) {
                              case r.h7.AUDIO_INPUT:
                                  a = t++;
                                  break;
                              case r.h7.AUDIO_OUTPUT:
                                  a = n++;
                                  break;
                              case r.h7.VIDEO_INPUT:
                              default:
                                  a = i++;
                          }
                          return {
                              id: e.deviceId,
                              type: e.kind,
                              index: a,
                              name: null != e.label && '' !== e.label ? e.label : 0 === a ? 'Default' : 'Device '.concat(a)
                          };
                      });
              })
              .then((e) => (a || (e = e.filter((e) => e.type !== r.h7.AUDIO_OUTPUT)).push(o(r.h7.AUDIO_OUTPUT)), e))
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

n.d(t, {
    Z: () => l,
    b: () => a
}),
    n(47120);
var o,
    i = n(388032),
    a = (((o = {}).COULD_NOT_HEAR_AUDIO = "I couldn't hear audio at all"), (o.NOBODY_COULD_HEAR_ME = 'Nobody could hear me'), (o.AUDIO_ECHOS = 'Audio had echos or feedback'), (o.AUDIO_ROBOTIC = 'Audio was robotic or distorted'), (o.AUDIO_CUT = 'Audio cut in and out'), (o.BAD_VOLUME = 'Volume was too low or high'), (o.BACKGROUND_NOISE = 'Background noise was too loud'), (o.SPEAKERPHONE = 'Issues with speakerphone'), (o.HEADSET = 'Issues with headset/bluetooth'), (o.VIBES_OFF = 'People were toxic or inappropriate'), (o.OTHER = 'Other'), o);
let r = [
    {
        label: i.NW.string(i.t['UqD/9f']),
        code: 2,
        value: "I couldn't hear audio at all"
    },
    {
        label: i.NW.string(i.t.DVEGuL),
        code: 3,
        value: 'Nobody could hear me'
    },
    {
        label: i.NW.string(i.t['2nWcBw']),
        code: 4,
        value: 'Audio had echos or feedback'
    },
    {
        label: i.NW.string(i.t.K3E4Dw),
        code: 5,
        value: 'Audio was robotic or distorted'
    },
    {
        label: i.NW.string(i.t.Dpm2U1),
        code: 6,
        value: 'Audio cut in and out'
    },
    {
        label: i.NW.string(i.t.kuGsi4),
        code: 7,
        value: 'Volume was too low or high'
    },
    {
        label: i.NW.string(i.t.PkiFCQ),
        code: 8,
        value: 'Background noise was too loud'
    },
    {
        label: i.NW.string(i.t.hvIDwc),
        code: 9,
        value: 'Issues with speakerphone'
    },
    {
        label: i.NW.string(i.t['+gUm1t']),
        code: 10,
        value: 'Issues with headset/bluetooth'
    },
    {
        label: i.NW.string(i.t['++JLLy']),
        code: 11,
        value: 'People were toxic or inappropriate'
    },
    {
        label: i.NW.string(i.t['emlT9/']),
        code: 1,
        value: 'Other'
    }
];
function l(e) {
    let { isMobile: t, showVibesHoneypot: n } = e,
        o = new Set();
    return t || o.add('Issues with speakerphone'), n || o.add('People were toxic or inappropriate'), r.filter((e) => !o.has(e.value));
}

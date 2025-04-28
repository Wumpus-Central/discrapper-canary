n.d(t, {
    Q2: () => V,
    Rv: () => W,
    U6: () => F,
    UD: () => G,
    ZP: () => Y,
    oT: () => z
}),
    n(415506),
    n(539854);
var i,
    r = n(2818),
    s = n(186070),
    l = n(185514),
    a = n(395878),
    o = n(321697),
    c = n(775774),
    d = n(570408),
    u = n(438846),
    m = n(360038),
    p = n(175724),
    g = n(705371),
    h = n(138976),
    f = n(296805),
    b = n(561716),
    _ = n(239748),
    x = n(337482),
    E = n(679080),
    j = n(777019),
    C = n(523147),
    O = n(400332),
    S = n(908552),
    v = n(189509),
    T = n(673553),
    N = n(280492),
    I = n(746887),
    y = n(861007),
    A = n(89028),
    P = n(300644),
    R = n(721383),
    D = n(207234),
    Z = n(997292),
    w = n(743810),
    k = n(620212),
    L = n(188051),
    M = n(547420),
    B = n(981631),
    U = n(388032),
    V = (((i = {}).NAVIGATION = 'NAVIGATION'), (i.CHAT = 'CHAT'), (i.VOICE_AND_VIDEO = 'VOICE_AND_VIDEO'), (i.MISCELLANEOUS = 'MISCELLANEOUS'), (i.MESSAGE = 'MESSAGE'), (i.DND = 'DND'), i);
function G(e) {
    switch (e) {
        case 'NAVIGATION':
            return U.intl.string(U.t['yGE+jo']);
        case 'VOICE_AND_VIDEO':
            return U.intl.string(U.t.bI8F5u);
        case 'CHAT':
            return U.intl.string(U.t.hDhbb2);
        case 'MISCELLANEOUS':
            return U.intl.string(U.t.cBdwqq);
        case 'MESSAGE':
            return U.intl.string(U.t['5fpmX1']);
        case 'DND':
            return U.intl.string(U.t['69j6+/']);
    }
}
function F(e) {
    switch (e) {
        case 'MESSAGE':
            return U.intl.string(U.t.iepGDg);
        case 'DND':
            return U.intl.string(U.t.LBsB0d);
        default:
            return null;
    }
}
function H() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = z[e];
        if (null == t) throw Error('getBindsFor(...): No bind for '.concat(t));
        return t.binds[0];
    });
}
let z = {
    [B.EkH.SERVER_NEXT]: S.nq,
    [B.EkH.SERVER_PREV]: S.X3,
    [B.EkH.CHANNEL_NEXT]: l.tQ,
    [B.EkH.CHANNEL_PREV]: l.x5,
    [B.EkH.NAVIGATE_BACK]: l.Nx,
    [B.EkH.NAVIGATE_FORWARD]: l.On,
    [B.EkH.UNREAD_NEXT]: w.pd,
    [B.EkH.UNREAD_PREV]: w.wk,
    [B.EkH.MENTION_CHANNEL_NEXT]: w.Nv,
    [B.EkH.MENTION_CHANNEL_PREV]: w.uX,
    [B.EkH.TOGGLE_PREVIOUS_GUILD]: l.$c,
    [B.EkH.JUMP_TO_GUILD]: m.u,
    [B.EkH.SUBMIT]: v.z,
    [B.EkH.TEXTAREA_FOCUS]: T.U,
    [B.EkH.MARK_CHANNEL_READ]: p.f,
    [B.EkH.MARK_SERVER_READ]: g.l,
    [B.EkH.TOGGLE_CHANNEL_PINS]: y.u,
    [B.EkH.TOGGLE_FOR_LATER]: A.f,
    [B.EkH.TOGGLE_INBOX]: D.a,
    [B.EkH.MARK_TOP_INBOX_CHANNEL_READ]: D.M,
    [B.EkH.TOGGLE_USERS]: Z.r,
    [B.EkH.TOGGLE_HELP]: P.O,
    [B.EkH.VIBE_WITH_WUMPUS]: L.w,
    [B.EkH.TOGGLE_MUTE]: N.iN,
    [B.EkH.TOGGLE_DEAFEN]: N.oV,
    [B.EkH.TOGGLE_CATEGORY_COLLAPSED]: I.u,
    [B.EkH.SEARCH_SOUNDBOARD]: C.Z,
    [B.EkH.SCROLL_UP]: x.B2,
    [B.EkH.SCROLL_DOWN]: x.gN,
    [B.EkH.QUICKSWITCHER_SHOW]: b.$,
    [B.EkH.CREATE_DM_GROUP]: a.K,
    [B.EkH.SEARCH_EMOJIS]: E.S,
    [B.EkH.SEARCH_GIFS]: j.O,
    [B.EkH.SEARCH_STICKERS]: O.U,
    [B.EkH.TOGGLE_HOTKEYS]: R._,
    [B.EkH.JUMP_TO_FIRST_UNREAD]: h.O,
    [B.EkH.CREATE_GUILD]: o.r,
    [B.EkH.UPLOAD_FILE]: k.U,
    [B.EkH.RETURN_TO_AUDIO_CHANNEL]: _.F,
    [B.EkH.CALL_ACCEPT]: s.IL,
    [B.EkH.CALL_START]: s.FI,
    [B.EkH.FOCUS_SEARCH]: d.I,
    [B.EkH.JUMP_TO_CURRENT_CALL]: u.K,
    [B.EkH.ZOOM_IN]: M.UF,
    [B.EkH.ZOOM_OUT]: M.RC,
    [B.EkH.ZOOM_RESET]: M.MY,
    [B.EkH.OPEN_APP_DIRECTORY]: f.T,
    [B.EkH.BROWSER_DEVTOOLS]: c.p
};
function W() {
    let e = [
            {
                description: U.intl.string(U.t.bx4Uy8),
                binds: H(B.EkH.SERVER_PREV, B.EkH.SERVER_NEXT),
                group: 'NAVIGATION'
            },
            {
                description: U.intl.string(U.t['+Wem6u']),
                binds: H(B.EkH.CHANNEL_PREV, B.EkH.CHANNEL_NEXT),
                group: 'NAVIGATION'
            },
            {
                description: U.intl.string(U.t['+2fcd3']),
                binds: H(B.EkH.NAVIGATE_BACK, B.EkH.NAVIGATE_FORWARD),
                group: 'NAVIGATION'
            },
            {
                description: U.intl.string(U.t.eVmj1N),
                binds: H(B.EkH.UNREAD_PREV, B.EkH.UNREAD_NEXT),
                group: 'NAVIGATION'
            },
            {
                description: U.intl.string(U.t.EcqS7e),
                binds: H(B.EkH.MENTION_CHANNEL_PREV, B.EkH.MENTION_CHANNEL_NEXT),
                group: 'NAVIGATION'
            },
            {
                description: U.intl.string(U.t['4I3pwc']),
                binds: H(B.EkH.JUMP_TO_CURRENT_CALL),
                group: 'NAVIGATION'
            },
            {
                description: U.intl.string(U.t['Bqss7+']),
                binds: H(B.EkH.TOGGLE_PREVIOUS_GUILD),
                group: 'NAVIGATION'
            },
            {
                description: U.intl.string(U.t.yYsRlJ),
                binds: H(B.EkH.QUICKSWITCHER_SHOW),
                group: 'NAVIGATION'
            },
            {
                description: U.intl.string(U.t.O7ouXF),
                binds: H(B.EkH.CREATE_GUILD),
                group: 'NAVIGATION',
                groupEnd: !0
            },
            {
                description: U.intl.string(U.t.Lns0FR),
                binds: ['mod+d'],
                group: 'DND'
            },
            {
                description: U.intl.string(U.t.dmMqa2),
                binds: ['up', 'down'],
                group: 'DND'
            },
            {
                description: U.intl.string(U.t['cs/HVF']),
                binds: ['spacebar', 'enter'],
                group: 'DND'
            },
            {
                description: U.intl.string(U.t['1ioMJS']),
                binds: ['esc'],
                group: 'DND',
                groupEnd: !0
            },
            {
                description: U.intl.string(U.t.UaXAPz),
                binds: H(B.EkH.MARK_SERVER_READ),
                group: 'CHAT'
            },
            {
                description: U.intl.string(U.t['5X9vFh']),
                binds: H(B.EkH.MARK_CHANNEL_READ),
                group: 'CHAT'
            },
            {
                description: U.intl.string(U.t.wxQFsr),
                binds: H(B.EkH.CREATE_DM_GROUP),
                group: 'CHAT'
            },
            {
                description: U.intl.string(U.t['C+XV7e']),
                binds: H(B.EkH.TOGGLE_CHANNEL_PINS),
                group: 'CHAT'
            },
            {
                description: U.intl.string(U.t['Q+YV/f']),
                binds: H(B.EkH.TOGGLE_INBOX),
                group: 'CHAT'
            },
            {
                description: U.intl.string(U.t['YEjV+f']),
                binds: H(B.EkH.MARK_TOP_INBOX_CHANNEL_READ),
                group: 'CHAT'
            },
            {
                description: U.intl.string(U.t.AcBI9f),
                binds: H(B.EkH.TOGGLE_USERS),
                group: 'CHAT'
            },
            {
                description: U.intl.string(U.t.JoxNnp),
                binds: H(B.EkH.SEARCH_EMOJIS),
                group: 'CHAT'
            },
            {
                description: U.intl.string(U.t['3PHxo6']),
                binds: H(B.EkH.SEARCH_GIFS),
                group: 'CHAT'
            },
            {
                description: U.intl.string(U.t.YFl7eX),
                binds: H(B.EkH.SEARCH_STICKERS),
                group: 'CHAT'
            },
            {
                description: U.intl.string(U.t.L3RYYG),
                binds: H(B.EkH.SCROLL_UP, B.EkH.SCROLL_DOWN),
                group: 'CHAT'
            },
            {
                description: U.intl.string(U.t['3HAurK']),
                binds: H(B.EkH.JUMP_TO_FIRST_UNREAD),
                group: 'CHAT'
            },
            {
                description: U.intl.string(U.t.rrYBEh),
                binds: H(B.EkH.TEXTAREA_FOCUS),
                group: 'CHAT'
            },
            {
                description: U.intl.string(U.t.sUJlPD),
                binds: H(B.EkH.UPLOAD_FILE),
                group: 'CHAT',
                groupEnd: !0
            },
            {
                description: U.intl.string(U.t.tL6eVV),
                binds: H(B.EkH.TOGGLE_MUTE),
                group: 'VOICE_AND_VIDEO'
            },
            {
                description: U.intl.string(U.t['QXe/7e']),
                binds: H(B.EkH.TOGGLE_DEAFEN),
                group: 'VOICE_AND_VIDEO'
            },
            {
                description: U.intl.string(U.t.d6UIio),
                binds: H(B.EkH.CALL_ACCEPT),
                group: 'VOICE_AND_VIDEO'
            },
            {
                description: U.intl.string(U.t.IcEW09),
                binds: H(B.EkH.MARK_CHANNEL_READ),
                group: 'VOICE_AND_VIDEO'
            },
            {
                description: U.intl.string(U.t.WN2dsb),
                binds: H(B.EkH.CALL_START),
                group: 'VOICE_AND_VIDEO',
                groupEnd: !0
            },
            {
                description: U.intl.string(U.t.rUK0kp),
                binds: H(B.EkH.SEARCH_SOUNDBOARD),
                group: 'VOICE_AND_VIDEO'
            },
            {
                description: U.intl.string(U.t.vkGkSk),
                binds: H(B.EkH.TOGGLE_HELP),
                group: 'MISCELLANEOUS'
            },
            {
                description: U.intl.string(U.t['FJvZ8/']),
                binds: H(B.EkH.FOCUS_SEARCH),
                group: 'MISCELLANEOUS'
            },
            {
                description: U.intl.string(U.t.HnNtEB),
                binds: ['h+h+right+n+k'],
                group: 'MISCELLANEOUS',
                groupEnd: !0
            },
            {
                description: U.intl.string(U.t.fsBWmZ),
                binds: ['e'],
                group: 'MESSAGE'
            },
            {
                description: U.intl.string(U.t.xwMqDw),
                binds: ['backspace'],
                group: 'MESSAGE'
            },
            {
                description: U.intl.string(U.t['CvQ18/']),
                binds: ['p'],
                group: 'MESSAGE'
            },
            {
                description: U.intl.string(U.t.lfIHs7),
                binds: ['plus'],
                group: 'MESSAGE'
            },
            {
                description: U.intl.string(U.t['5IEsGx']),
                binds: ['r'],
                group: 'MESSAGE'
            },
            {
                description: U.intl.string(U.t.zSyDdH),
                binds: ['f'],
                group: 'MESSAGE'
            },
            {
                description: U.intl.string(U.t.JrGD7O),
                binds: ['mod+c'],
                group: 'MESSAGE'
            },
            {
                description: U.intl.string(U.t.RpE9k5),
                binds: ['alt+enter'],
                group: 'MESSAGE'
            },
            {
                description: U.intl.string(U.t.rrYBEh),
                binds: ['escape'],
                group: 'MESSAGE',
                groupEnd: !0
            },
            {
                description: U.intl.string(U.t.z9c6mp),
                binds: H(B.EkH.VIBE_WITH_WUMPUS),
                group: 'MISCELLANEOUS'
            }
        ],
        { enabled: t, inInbox: n } = r.Z.getCurrentConfig({ location: 'keybinds' }, { autoTrackExposure: !1 });
    return (
        t &&
            !n &&
            e.push({
                description: U.intl.string(U.t.IWNSoK),
                binds: H(B.EkH.TOGGLE_FOR_LATER),
                group: 'CHAT'
            }),
        e
    );
}
let Y = 12633 == n.j ? z : null;

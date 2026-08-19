"use strict";
n.d(t, { iX: () => A, bf: () => u, sg: () => d });
let i = {
    0: [
        { x: 13.6, y: 56.8 },
        { x: 27.5, y: 50.5 },
        { x: 40.5, y: 44.5 },
        { x: 12.5, y: 69 },
        { x: 23.5, y: 75 },
        { x: 12.5, y: 85 },
        { x: 38, y: 63 },
        { x: 45, y: 60 },
        { x: 51.7, y: 57 },
        { x: 58, y: 60 },
        { x: 65, y: 63 },
        { x: 67.4, y: 76.5 },
        { x: 79.2, y: 69.2 },
        { x: 92.5, y: 76.5 },
        { x: 75, y: 90 },
        { x: 85.5, y: 49 },
        { x: 94.5, y: 46 },
        { x: 96, y: 54 },
        { x: 39.5, y: 7 },
        { x: 49.5, y: 10 },
        { x: 60, y: 7 },
        { x: 36, y: 53.8 },
    ],
    1: [
        { x: 5, y: 20 },
        { x: 10, y: 20 },
        { x: 15, y: 20 },
        { x: 20, y: 20 },
        { x: 25, y: 20 },
        { x: 30, y: 20 },
        { x: 35, y: 20 },
        { x: 40, y: 20 },
        { x: 45, y: 20 },
        { x: 50, y: 20 },
        { x: 55, y: 20 },
        { x: 60, y: 20 },
        { x: 65, y: 20 },
        { x: 70, y: 20 },
        { x: 75, y: 20 },
        { x: 80, y: 20 },
        { x: 85, y: 20 },
        { x: 90, y: 20 },
        { x: 95, y: 20 },
        { x: 40, y: 80 },
        { x: 50, y: 80 },
        { x: 60, y: 80 },
    ],
};
var r = n(821578),
    a = n(662731),
    s = n(375708);
let l =
        "https://cdn.discordapp.com/assets/content/320ae17d126cb2f82102cd73f82afb31e27736a64a866ea95c590adde3b73a70.webp",
    o =
        "https://cdn.discordapp.com/assets/content/8e37993ad6f8ec19df3a8b32fc1d3c7957fe1e2e8f1c81f6d9d6f7fbe6fec34b.webp",
    d = "guild-room",
    c = 5 / 219;
function u(e, t) {
    let n = 2 * c;
    return t && (n *= e), 1 + n;
}
function _(e, t) {
    return () => s.intl.formatToPlainString(a.default.crFI7e, { seatType: s.intl.string(e), number: t });
}
function E(e, t) {
    return () =>
        s.intl.formatToPlainString(a.default.LFdLjz, { seatType: s.intl.string(e), position: s.intl.string(t) });
}
let A = {
    [r.I.DEFAULT]: {
        background: l,
        backgroundBlurred: o,
        aspectRatio: 4096 / 2997,
        getName: () => s.intl.formatToPlainString(a.default["3xb4VY"], { number: 1 }),
        seats: [
            { name: "PC_SEAT_1", getLabel: _(a.default.ytIYuY, 1), position: i[r.I.DEFAULT][0] },
            { name: "PC_SEAT_2", getLabel: _(a.default.ytIYuY, 2), position: i[r.I.DEFAULT][1] },
            { name: "PC_SEAT_3", getLabel: _(a.default.ytIYuY, 3), position: i[r.I.DEFAULT][2] },
            { name: "DUO_SEAT_1", getLabel: E(a.default.p7JgFM, a.default.YpJ7QS), position: i[r.I.DEFAULT][3] },
            { name: "DUO_SEAT_2", getLabel: E(a.default.p7JgFM, a.default.wxkoLF), position: i[r.I.DEFAULT][4] },
            {
                name: "DUO_SEAT_STANDING_1",
                getLabel: E(a.default.p7JgFM, a.default.Qt29nt),
                position: i[r.I.DEFAULT][5],
            },
            { name: "MAIN_COUCH_SEAT_1", getLabel: E(a.default.wjBOG8, a.default.lQKxC5), position: i[r.I.DEFAULT][6] },
            { name: "MAIN_COUCH_SEAT_2", getLabel: E(a.default.wjBOG8, a.default.WMBV4i), position: i[r.I.DEFAULT][7] },
            {
                name: "MAIN_COUCH_SEAT_3",
                getLabel: E(a.default.wjBOG8, a.default["yG+xS0"]),
                position: i[r.I.DEFAULT][8],
            },
            {
                name: "MAIN_COUCH_SEAT_4",
                getLabel: E(a.default.wjBOG8, a.default["5ZigwU"]),
                position: i[r.I.DEFAULT][9],
            },
            {
                name: "MAIN_COUCH_SEAT_5",
                getLabel: E(a.default.wjBOG8, a.default.iVfA9i),
                position: i[r.I.DEFAULT][10],
            },
            { name: "SIDE_GROUP_SEAT_1", getLabel: _(a.default["C+LGlh"], 1), position: i[r.I.DEFAULT][11] },
            { name: "SIDE_GROUP_SEAT_2", getLabel: _(a.default["C+LGlh"], 2), position: i[r.I.DEFAULT][12] },
            { name: "SIDE_GROUP_SEAT_3", getLabel: _(a.default["C+LGlh"], 3), position: i[r.I.DEFAULT][13] },
            {
                name: "SIDE_GROUP_SEAT_STANDING_1",
                getLabel: E(a.default["C+LGlh"], a.default.Qt29nt),
                position: i[r.I.DEFAULT][14],
            },
            { name: "BACKROOM_SEAT_1", getLabel: _(a.default.lkzfot, 1), position: i[r.I.DEFAULT][15], dim: !0 },
            { name: "BACKROOM_SEAT_2", getLabel: _(a.default.lkzfot, 2), position: i[r.I.DEFAULT][16], dim: !0 },
            { name: "BACKROOM_SEAT_3", getLabel: _(a.default.lkzfot, 3), position: i[r.I.DEFAULT][17], dim: !0 },
            { name: "RAFTERS_SEAT_1", getLabel: _(a.default.IE3e0y, 1), position: i[r.I.DEFAULT][18] },
            { name: "RAFTERS_SEAT_2", getLabel: _(a.default.IE3e0y, 2), position: i[r.I.DEFAULT][19] },
            { name: "RAFTERS_SEAT_3", getLabel: _(a.default.IE3e0y, 3), position: i[r.I.DEFAULT][20] },
        ],
        plants: [{ x: 45.57, y: 50.62 }],
        screen: {
            topLeft: { x: 56.8, y: 16.15 },
            topRight: { x: 75.85, y: 23 },
            bottomRight: { x: 75.3, y: 41.3 },
            bottomLeft: { x: 56.95, y: 33.75 },
        },
    },
    [r.I.LIVING_ROOM_2]: {
        background: l,
        backgroundBlurred: o,
        aspectRatio: 4096 / 2997,
        getName: () => s.intl.formatToPlainString(a.default["3xb4VY"], { number: 2 }),
        seats: [
            { name: "PC_SEAT_1", getLabel: _(a.default.ytIYuY, 1), position: i[r.I.LIVING_ROOM_2][0] },
            { name: "PC_SEAT_2", getLabel: _(a.default.ytIYuY, 2), position: i[r.I.LIVING_ROOM_2][1] },
            { name: "PC_SEAT_3", getLabel: _(a.default.ytIYuY, 3), position: i[r.I.LIVING_ROOM_2][2] },
            { name: "DUO_SEAT_1", getLabel: E(a.default.p7JgFM, a.default.YpJ7QS), position: i[r.I.LIVING_ROOM_2][3] },
            { name: "DUO_SEAT_2", getLabel: E(a.default.p7JgFM, a.default.wxkoLF), position: i[r.I.LIVING_ROOM_2][4] },
            {
                name: "DUO_SEAT_STANDING_1",
                getLabel: E(a.default.p7JgFM, a.default.Qt29nt),
                position: i[r.I.LIVING_ROOM_2][5],
            },
            {
                name: "MAIN_COUCH_SEAT_1",
                getLabel: E(a.default.wjBOG8, a.default.lQKxC5),
                position: i[r.I.LIVING_ROOM_2][6],
            },
            {
                name: "MAIN_COUCH_SEAT_2",
                getLabel: E(a.default.wjBOG8, a.default.WMBV4i),
                position: i[r.I.LIVING_ROOM_2][7],
            },
            {
                name: "MAIN_COUCH_SEAT_3",
                getLabel: E(a.default.wjBOG8, a.default["yG+xS0"]),
                position: i[r.I.LIVING_ROOM_2][8],
            },
            {
                name: "MAIN_COUCH_SEAT_4",
                getLabel: E(a.default.wjBOG8, a.default["5ZigwU"]),
                position: i[r.I.LIVING_ROOM_2][9],
            },
            {
                name: "MAIN_COUCH_SEAT_5",
                getLabel: E(a.default.wjBOG8, a.default.iVfA9i),
                position: i[r.I.LIVING_ROOM_2][10],
            },
            { name: "SIDE_GROUP_SEAT_1", getLabel: _(a.default["C+LGlh"], 1), position: i[r.I.LIVING_ROOM_2][11] },
            { name: "SIDE_GROUP_SEAT_2", getLabel: _(a.default["C+LGlh"], 2), position: i[r.I.LIVING_ROOM_2][12] },
            { name: "SIDE_GROUP_SEAT_3", getLabel: _(a.default["C+LGlh"], 3), position: i[r.I.LIVING_ROOM_2][13] },
            {
                name: "SIDE_GROUP_SEAT_STANDING_1",
                getLabel: E(a.default["C+LGlh"], a.default.Qt29nt),
                position: i[r.I.LIVING_ROOM_2][14],
            },
            { name: "BACKROOM_SEAT_1", getLabel: _(a.default.lkzfot, 1), position: i[r.I.LIVING_ROOM_2][15], dim: !0 },
            { name: "BACKROOM_SEAT_2", getLabel: _(a.default.lkzfot, 2), position: i[r.I.LIVING_ROOM_2][16], dim: !0 },
            { name: "BACKROOM_SEAT_3", getLabel: _(a.default.lkzfot, 3), position: i[r.I.LIVING_ROOM_2][17], dim: !0 },
            { name: "RAFTERS_SEAT_1", getLabel: _(a.default.IE3e0y, 1), position: i[r.I.LIVING_ROOM_2][18] },
            { name: "RAFTERS_SEAT_2", getLabel: _(a.default.IE3e0y, 2), position: i[r.I.LIVING_ROOM_2][19] },
            { name: "RAFTERS_SEAT_3", getLabel: _(a.default.IE3e0y, 3), position: i[r.I.LIVING_ROOM_2][20] },
        ],
        plants: [{ x: 45.57, y: 50.62 }],
        screen: {
            topLeft: { x: 56.8, y: 16.15 },
            topRight: { x: 75.85, y: 23 },
            bottomRight: { x: 75.3, y: 41.3 },
            bottomLeft: { x: 56.95, y: 33.75 },
        },
    },
};

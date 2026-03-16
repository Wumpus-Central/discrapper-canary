"use strict";
n.d(t, { A: () => s });
let r = String.raw,
    i = r`\p{Emoji}(?:\p{EMod}|[\u{E0020}-\u{E007E}]+\u{E007F}|\uFE0F?\u20E3?)`,
    s = () => RegExp(r`\p{RI}{2}|(?![#*\d](?!\uFE0F?\u20E3))${i}(?:\u200D${i})*`, "gu");

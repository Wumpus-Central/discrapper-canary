n.d(t, { B: () => s, MZ: () => o, TH: () => l, tn: () => i });
let a = [
    {
        date: "2026-09-21",
        platforms: ["desktop", "mobile"],
        summary: "Moderation Bot now starts with a short wizard, builds straight away, then tells you how to test it.",
    },
    {
        date: "2026-09-21",
        platforms: ["desktop", "mobile"],
        summary: "The model picker now offers Grok 4.7 alongside Claude and GPT.",
    },
    {
        date: "2026-09-20",
        platforms: ["desktop", "mobile"],
        summary:
            "Effort is now one three-tier dial that acts as a ceiling: pick Speedrun, Balanced, or Big Brain and everything your project runs stays at or under it.",
    },
    {
        date: "2026-09-20",
        platforms: ["desktop", "mobile"],
        summary:
            "Apps that show people now get their real Discord avatars on the first build, and clicking one opens their profile card.",
    },
    {
        date: "2026-09-20",
        platforms: ["desktop", "mobile"],
        summary:
            "Apps you build can now ask the AI quick yes/no, pick-one, and rating questions and get confidence-scored answers.",
    },
    {
        date: "2026-09-20",
        platforms: ["desktop", "mobile"],
        summary: "Messages sent mid-task route faster: questions, follow-ups, and interrupts respond right away.",
    },
    {
        date: "2026-09-20",
        platforms: ["desktop", "mobile"],
        summary: "The rune usage panel now shows Deciding, the quick checks that keep an eye on your builds.",
    },
    {
        date: "2026-09-18",
        platforms: ["mobile"],
        summary: "On phones, opening the chat in an app\u2019s channel now marks its messages read.",
    },
    {
        date: "2026-09-18",
        platforms: ["mobile"],
        summary: "On phones, hold an app\u2019s channel to find Edit App, which opens it in Conjure.",
    },
    {
        date: "2026-09-18",
        platforms: ["mobile"],
        summary: "On phones, an app\u2019s channel wears the app icon in the channel list, as it does on desktop.",
    },
    {
        date: "2026-09-18",
        platforms: ["mobile"],
        summary:
            "On phones, new messages in an app\u2019s channel float over the running app for a moment; tap one to open the chat.",
    },
    {
        date: "2026-09-18",
        platforms: ["mobile"],
        summary:
            "On phones, the chat button in an app\u2019s channel shows a dot when there are new messages, and the count when you were mentioned.",
    },
    {
        date: "2026-09-18",
        platforms: ["mobile"],
        summary:
            "On phones, an app\u2019s sign-in prompt now appears when it asks for one, in its channel and in the builder\u2019s Frame.",
    },
    {
        date: "2026-09-18",
        platforms: ["mobile"],
        summary:
            "On phones, a conjured card on your own profile has a refresh button, so a fresh build shows up without waiting.",
    },
    {
        date: "2026-09-18",
        platforms: ["mobile"],
        summary:
            "On phones, your own profile offers Custom card: describe a public source and Conjure builds a profile card from it.",
    },
    {
        date: "2026-09-18",
        platforms: ["mobile"],
        summary:
            "On phones, Select to edit in the builder\u2019s header lets you tap a part of your app\u2019s Frame, see what you picked, and tell Conjure what should change there.",
    },
    {
        date: "2026-09-18",
        platforms: ["mobile"],
        summary:
            "On phones, a project\u2019s menu now has Refresh App and Close for the running Frame, Refresh Profile Widget, and a Connect row for each account your app asks to link, as on desktop; the Frame also reloads onto the newest build after every deploy.",
    },
    {
        date: "2026-09-18",
        platforms: ["mobile"],
        summary:
            "On phones, tapping Publish before your app has a Frame opens a sheet saying what to do next, instead of a bare alert.",
    },
    {
        date: "2026-09-18",
        platforms: ["mobile"],
        summary:
            "On phones, rewinding data switches between Preview and Published with the control at the top of the sheet.",
    },
    {
        date: "2026-09-18",
        platforms: ["mobile"],
        summary:
            "On phones, while Conjure drives your Frame, the menus and dialogs the app asks Discord to show are answered for it and reported back, as on desktop, so the app never waits on a tap nobody can make.",
    },
    {
        date: "2026-09-18",
        platforms: ["desktop", "mobile"],
        summary: "What\u2019s new keeps its three newest lines and adds View all, which opens the whole history.",
    },
    {
        date: "2026-09-18",
        platforms: ["desktop", "mobile"],
        summary:
            'The working status above the chat box now reads simply "Conjuring\u2026" or "Thinking\u2026", without repeating the name in front.',
    },
    {
        date: "2026-09-18",
        platforms: ["mobile"],
        summary:
            "On phones, Conjure can now drive and look at your app\u2019s Frame while it works; the strip says Controlling and the app holds your taps until it is done.",
    },
    {
        date: "2026-09-17",
        platforms: ["mobile"],
        summary:
            "On phones, install your app or review its new permissions right from the builder; publishing no longer stops at a notice you could only act on from desktop.",
    },
    {
        date: "2026-09-17",
        platforms: ["mobile"],
        summary:
            "On phones, switch between the chat and your app at the top of the builder; the app keeps running while you talk to Conjure, a bot app opens its DM right there, and a profile card shows as it will on your profile.",
    },
    {
        date: "2026-09-17",
        platforms: ["mobile"],
        summary:
            "On phones, Conjure\u2019s replies and reasoning now stream in smoothly, and the status label changes on the loader\u2019s beat, as on desktop.",
    },
    {
        date: "2026-09-17",
        platforms: ["mobile"],
        summary: "The debug Trace tab on phones can save the redacted trace as a JSON file, as desktop exports it.",
    },
    {
        date: "2026-09-16",
        platforms: ["mobile"],
        summary:
            "On phones, tap a name or avatar in the transcript to open their profile, and hold a message to copy its text; handy when building together.",
    },
    {
        date: "2026-09-16",
        platforms: ["mobile"],
        summary:
            "On phones, the model picker now sits in the composer until you start typing, and send and stop take turns in that corner as they do in a text channel.",
    },
    {
        date: "2026-09-16",
        platforms: ["mobile"],
        summary:
            "On phones, the strip above the composer now shows what Conjure is doing and the runes used, as on desktop; tap the indicator to read the model\u2019s reasoning as it streams.",
    },
    {
        date: "2026-09-16",
        platforms: ["mobile"],
        summary: "While Conjure works on your phone, a side quest may be offered when a video quest is available.",
    },
    {
        date: "2026-09-16",
        platforms: ["mobile"],
        summary:
            "On phones, helpers now say what they finished and how long it took, a quick aside is marked as one, and a project that is gone says so instead of closing.",
    },
    {
        date: "2026-09-15",
        platforms: ["mobile"],
        summary:
            "With Discord\u2019s Developer Mode on, a project\u2019s menu on phones has a Debug entry: your app\u2019s runtime logs, its resource use, and the agent\u2019s spend and limits.",
    },
    {
        date: "2026-09-15",
        platforms: ["mobile"],
        summary:
            "On phones, a project has the same menu as desktop: remix it, export or import it, get its coding tool link, browse version history and rewind its data from the chat menu, and copy its link or ID, open its settings or delete it from the landing.",
    },
    {
        date: "2026-09-14",
        platforms: ["mobile"],
        summary:
            "The box for answering a question in your own words no longer grabs the keyboard the moment a question appears, and it reads as an answer rather than a heading.",
    },
    {
        date: "2026-09-14",
        platforms: ["mobile"],
        summary:
            "On phones, the builder chat now matches desktop: a turn\u2019s work folds behind one line, each helper wears its creature, an interrupted turn says so, and the glow no longer slows the chat down.",
    },
    {
        date: "2026-09-14",
        platforms: ["mobile"],
        summary:
            "On phones, new projects start from a Create button in the header, with templates, starter prompts, who the app is for, and the Effort scale, and the landing leads with what is new.",
    },
    {
        date: "2026-09-14",
        platforms: ["mobile"],
        summary: "On phones, App Settings is one tap away in the chat menu, without waiting for Conjure to ask.",
    },
    {
        date: "2026-09-14",
        platforms: ["desktop"],
        summary:
            "An app's channel now opens its chat when unread messages are waiting, and new messages preview over the running app while the chat is closed.",
    },
    {
        date: "2026-09-13",
        platforms: ["desktop"],
        summary:
            "Escape or a click outside the frame now leaves select mode from anywhere, closing whatever was open without picking anything.",
    },
    {
        date: "2026-09-12",
        platforms: ["desktop", "mobile"],
        summary:
            "While you preview an app, every notification it sends arrives as a DM to you, naming anyone it concerns, so nothing you test posts to a channel or messages anyone else.",
    },
    {
        date: "2026-09-12",
        platforms: ["desktop", "mobile"],
        summary:
            "Plans for an app you imported or remixed no longer invent a wireframe sketch: the sketch is reserved for brand-new apps that have no screens yet.",
    },
    {
        date: "2026-09-11",
        platforms: ["desktop", "mobile"],
        summary:
            "A new Rust Sphere template: a spinning, lit 3D globe drawn by Rust running as WebAssembly, ready to remix into your own renderer.",
    },
    {
        date: "2026-09-10",
        platforms: ["desktop", "mobile"],
        summary:
            "Hitting your project limit, or conjuring too fast, now says so instead of just asking you to try again.",
    },
    {
        date: "2026-09-09",
        platforms: ["desktop", "mobile"],
        summary:
            "Pick which app a voice channel runs from the call itself, and switch between it and the participants.",
    },
    {
        date: "2026-09-09",
        platforms: ["mobile"],
        summary:
            "On phones, an app channel now has a chat button: read and post in the channel as usual, then tap back to the app.",
    },
    {
        date: "2026-09-09",
        platforms: ["desktop"],
        summary:
            "The app frame can go fullscreen: a new header control fills your whole screen with the running app, and Escape brings the view back.",
    },
    {
        date: "2026-09-08",
        platforms: ["desktop", "mobile"],
        summary: "App settings that name a channel now offer a channel picker instead of asking you to paste an id.",
    },
    {
        date: "2026-09-08",
        platforms: ["desktop"],
        summary:
            "Made a mistake in your app\u2019s data? Conjure now saves a restore point before every deploy, lets you save your own, and can rewind the app\u2019s data to any restore point or exact moment from the last 30 days, keeping an undo point so a rewind is never one-way.",
    },
    {
        date: "2026-09-08",
        platforms: ["desktop"],
        summary:
            "Importing a big project is faster and narrates its progress, and a zip that still has node_modules or .git inside now imports cleanly, telling you what was left out.",
    },
    {
        date: "2026-09-08",
        platforms: ["desktop", "mobile"],
        summary:
            "The checklist step being worked on gets its box back: the spinner turns inside the same frame the finished tick fills in.",
    },
    {
        date: "2026-09-08",
        platforms: ["desktop"],
        summary:
            "Comment mode now picks whatever is under your pointer, not only buttons and headings, and outlines it so you can see what you are about to comment on. Each note is pinned to the exact spot you clicked, and its card opens out of that pin.",
    },
    {
        date: "2026-09-07",
        platforms: ["desktop", "mobile"],
        summary:
            "A Priority toggle arrives in the model picker: on models that offer it, replies come back sooner for more runes, and the Speedrun stop now runs it by default.",
    },
    {
        date: "2026-09-07",
        platforms: ["desktop", "mobile"],
        summary:
            "An app with public pages can now claim a name for its web address \u2014 yourgame.discordvibeapps.com instead of a long number \u2014 and links to the old address keep working.",
    },
    {
        date: "2026-09-07",
        platforms: ["desktop"],
        summary:
            "You can now point at your app instead of describing it. Turn on comment mode, click anything on screen to leave a note on that exact piece, and every note you leave stays marked where you left it. Reopen any of them to change your wording or take it back, then send the whole set at once with a note for all of it. Once sent, the set reads back as a tidy summary of what you asked for rather than a page of technical detail.",
    },
    {
        date: "2026-09-06",
        platforms: ["desktop", "mobile"],
        summary:
            "Every build step now shows its progress behind the curtain \u2014 what is syncing, installing, bundling, packing, checking, and publishing \u2014 instead of one silent line.",
    },
    {
        date: "2026-09-06",
        platforms: ["desktop"],
        summary:
            "Collaborators on an app shared with their server can now remix it into a copy of their own, with no need for the owner to turn sharing on first.",
    },
    {
        date: "2026-09-06",
        platforms: ["desktop", "mobile"],
        summary:
            "Remixed an app? When the original improves, Conjure offers to update your copy while keeping every change you made, only checking with you on the rare spot it cannot keep both. You can also ask it to inherit updates from another app by its project id, even for a project you imported rather than remixed.",
    },
    {
        date: "2026-09-05",
        platforms: ["desktop", "mobile"],
        summary: "GPT-6 Astra joins the model picker and now powers the Big Brain effort stop.",
    },
    {
        date: "2026-09-05",
        platforms: ["desktop", "mobile"],
        summary:
            "The rune panel is simpler now: one Conjuring count covers all the work in a turn, with Compacting listed separately.",
    },
    {
        date: "2026-09-05",
        platforms: ["desktop", "mobile"],
        summary:
            "Your app now has its own web address: pages people can open in a browser, a second address showing the version you are still working on, and a Sign in with Discord button that never asks anyone for a password.",
    },
    {
        date: "2026-09-05",
        platforms: ["desktop", "mobile"],
        summary:
            "Claude Fable 5.1 replaces Claude Fable 5 in the model picker, sharper on long builds at the same price.",
    },
    {
        date: "2026-09-03",
        platforms: ["desktop"],
        summary: "Remix an app and Conjure builds your copy first, so the ideas it suggests are ones you can try.",
    },
    {
        date: "2026-09-03",
        platforms: ["desktop", "mobile"],
        summary:
            "Your published app stays playable while Conjure drives the preview, instead of both freezing at once.",
    },
    {
        date: "2026-09-02",
        platforms: ["desktop", "mobile"],
        summary:
            "One Effort scale, from Speedrun to Big Brain, sets how much thinking goes into a run, instead of choosing models and thinking levels separately.",
    },
    {
        date: "2026-09-02",
        platforms: ["desktop", "mobile"],
        summary:
            "Apps now know who\u2019s using them the moment they open, without asking anyone to sign in or approve anything.",
    },
    {
        date: "2026-09-02",
        platforms: ["desktop"],
        summary:
            "A project you import gets fixed up and running straight away, instead of asking you to approve a plan.",
    },
    {
        date: "2026-09-02",
        platforms: ["desktop", "mobile"],
        summary:
            "Small follow-ups like adding sign-in are built straight away, instead of coming back as another plan to approve.",
    },
    {
        date: "2026-09-02",
        platforms: ["desktop", "mobile"],
        summary:
            "When a plan is redrawn, the new sketch keeps the look of the one before it, so your app still looks like itself.",
    },
    {
        date: "2026-09-01",
        platforms: ["desktop", "mobile"],
        summary:
            "Publishing now offers patch notes: Conjure drafts what changed since your last release, you edit them, and they post to a channel you pick.",
    },
    {
        date: "2026-09-01",
        platforms: ["desktop", "mobile"],
        summary: "People you share a project with can see the Publish control, instead of it being owner-only.",
    },
    {
        date: "2026-09-01",
        platforms: ["desktop", "mobile"],
        summary:
            "Checklist items Conjure is still working on show a spinner, so running and done tell apart at a glance.",
    },
    {
        date: "2026-08-31",
        platforms: ["desktop", "mobile"],
        summary: "Plan proposals come with a wireframe sketch, so you can see the shape of the app before you say go.",
    },
    {
        date: "2026-08-31",
        platforms: ["desktop"],
        summary:
            "With Discord\u2019s Developer Mode on, a debug pane beside the builder shows your app\u2019s live logs and what your project is spending.",
    },
    {
        date: "2026-08-31",
        platforms: ["desktop", "mobile"],
        summary:
            "Your project gets a real name as soon as Conjure lands on a plan, instead of sitting as Untitled App.",
    },
    {
        date: "2026-08-31",
        platforms: ["desktop", "mobile"],
        summary:
            "App icons are drawn to suit what the app actually does, and always come back solid rather than see-through.",
    },
    {
        date: "2026-08-28",
        platforms: ["desktop", "mobile"],
        summary: "Apps you install just for yourself can hold an ordinary back-and-forth conversation with you in DMs.",
    },
    {
        date: "2026-08-26",
        platforms: ["desktop", "mobile"],
        summary:
            "You can move back and forth through Conjure\u2019s questions instead of being held on the one in front of you.",
    },
    {
        date: "2026-08-26",
        platforms: ["desktop", "mobile"],
        summary: "Hand a project to a whole role in settings, rather than adding one person at a time.",
    },
    {
        date: "2026-08-25",
        platforms: ["desktop"],
        summary: "Conjuring has its own doorway in the desktop title bar, so it is one click away from anywhere.",
    },
];
function l(e) {
    return a.filter((t) => t.platforms.includes(e)).slice(0, 3);
}
function i(e) {
    return a.filter((t) => t.platforms.includes(e));
}
function s(e) {
    return i(e).length > 3;
}
function o(e) {
    return 1 === e.platforms.length;
}
